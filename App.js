
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-4 md:p-10 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Tejalakshmi Gangadhar Chalumuri
        </h1>
        <p className="text-xl text-gray-600">Data Analyst</p>
        <p className="max-w-xl mx-auto text-gray-500">
          Results-driven Data Analyst with 3+ years of experience in financial reporting, forecasting, and value-based care analytics. Passionate about transforming raw data into actionable insights through SQL, Python, and data visualization tools like Power BI and Tableau.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:teja.chalumuri98@gmail.com">
            <Button variant="outline"><Mail className="mr-2" /> Email</Button>
          </a>
          <a href="https://github.com/TejaChalumuri" target="_blank">
            <Button variant="outline"><Github className="mr-2" /> GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/tejalakshmi-gangadhar-c-a21688193/" target="_blank">
            <Button variant="outline"><Linkedin className="mr-2" /> LinkedIn</Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Python", "SQL", "R", "Power BI", "Tableau", "Excel",
            "Data Modeling", "Data Wrangling", "AWS", "Hadoop", "Spark", "Git", "Talend"
          ].map(skill => (
            <Card key={skill}><CardContent className="p-4 text-center">{skill}</CardContent></Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Stock Market Analysis</h3>
              <p className="text-sm text-gray-600">
                Built a predictive application using Apache Spark and Scrapy to gather live stock market data and forecast 30-day trends.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Fire Investigation in New York</h3>
              <p className="text-sm text-gray-600">
                Processed and engineered datasets to uncover insights on fire accident patterns in NYC.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <a 
          href="/TejalakshmiGangadhar_Chalumuri_Resume.pdf" 
          target="_blank"
          className="underline text-blue-600"
        >
          Download Resume
        </a>
      </section>
    </main>
  );
}
