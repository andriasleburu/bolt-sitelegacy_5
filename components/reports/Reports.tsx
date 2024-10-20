"use client"

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import HistoricalData from './HistoricalData';
import CommunityContributions from './CommunityContributions';
import ComprehensiveReports from './ComprehensiveReports';
import CustomReportBuilder from './CustomReportBuilder';
import ScheduledReports from './ScheduledReports';

const Reports = () => {
  return (
    <div className="p-6 space-y-6">
      <Tabs defaultValue="create">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="create">Create New Report</TabsTrigger>
          <TabsTrigger value="submit">Submit New Data</TabsTrigger>
          <TabsTrigger value="view">View Historical Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="create">
          <Card>
            <CardHeader>
              <CardTitle>Create New Report</CardTitle>
              <CardDescription>Generate a new report for a World Heritage Site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="site">Select Site</Label>
                <Select>
                  <SelectTrigger id="site">
                    <SelectValue placeholder="Select a World Heritage Site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="great-barrier-reef">Great Barrier Reef</SelectItem>
                    <SelectItem value="machu-picchu">Machu Picchu</SelectItem>
                    <SelectItem value="taj-mahal">Taj Mahal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="report-type">Report Type</Label>
                <Select>
                  <SelectTrigger id="report-type">
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="status">Status Report</SelectItem>
                    <SelectItem value="conservation">Conservation Report</SelectItem>
                    <SelectItem value="visitor">Visitor Impact Report</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date-range">Date Range</Label>
                <Input id="date-range" type="date" />
              </div>
              <Button>Generate Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="submit">
          <Card>
            <CardHeader>
              <CardTitle>Submit New Data</CardTitle>
              <CardDescription>Contribute new data for a World Heritage Site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="submit-site">Select Site</Label>
                <Select>
                  <SelectTrigger id="submit-site">
                    <SelectValue placeholder="Select a World Heritage Site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="great-barrier-reef">Great Barrier Reef</SelectItem>
                    <SelectItem value="machu-picchu">Machu Picchu</SelectItem>
                    <SelectItem value="taj-mahal">Taj Mahal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="data-type">Data Type</Label>
                <Select>
                  <SelectTrigger id="data-type">
                    <SelectValue placeholder="Select data type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="environmental">Environmental Data</SelectItem>
                    <SelectItem value="visitor">Visitor Data</SelectItem>
                    <SelectItem value="conservation">Conservation Efforts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="data-description">Data Description</Label>
                <Textarea id="data-description" placeholder="Describe the data you're submitting" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Files</Label>
                <Input id="file-upload" type="file" />
              </div>
              <Button>Submit Data</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="view">
          <HistoricalData />
        </TabsContent>
      </Tabs>

      <CommunityContributions />
      <ComprehensiveReports />
      <CustomReportBuilder />
      <ScheduledReports />
    </div>
  );
};

export default Reports;