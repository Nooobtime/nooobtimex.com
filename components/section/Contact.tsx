"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaDiscord,
  FaEnvelope,
  FaFacebook,
  FaLine,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  const contactDetails = [
    {
      title: "Facebook",
      detail: "Woongsaphat Puangsorn",
      link: "https://www.facebook.com/xnooobtime",
      icon: FaFacebook,
      recommend: true,
    },
    {
      title: "Discord",
      detail: "NooobtimeX",
      icon: FaDiscord,
      recommend: true,
    },
    {
      title: "Mail",
      detail: "nooobtimex@gmail.com",
      link: "mailto:nooobtimex@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "Phone number",
      detail: "+66 85 587 7024",
      link: "tel:+66855877024",
      icon: FaPhone,
    },
    {
      title: "Line",
      detail: "@nooobtimex",
      link: "https://line.me/ti/p/@nooobtimex",
      icon: FaLine,
    },
    {
      title: "LinkedIn",
      detail: "Wongsaphat Puangsorn",
      link: "https://www.linkedin.com/in/nooobtimex/",
      icon: FaLinkedin,
    },
  ];

  return (
    <section id="contact" className="flex items-center justify-center py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-primary mb-8">
          Contact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card key={index} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon className="text-xl" />
                    <span>{detail.title}</span>
                    {detail.recommend && (
                      <Badge variant="secondary">Recommended</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {detail.link ? (
                    <a
                      href={detail.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" hover:underline"
                    >
                      {detail.detail}
                    </a>
                  ) : (
                    <span>{detail.detail}</span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
