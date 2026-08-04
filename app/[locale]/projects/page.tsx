'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { ProjectCard } from '@/components/cards/ProjectCard';
import ProjectModal from '@/components/modal/ProjectModal';
import BackButton from "@/components/buttons/BackButton";

import { mockProjects } from '@/constant/interfaceConst';
import type { Project } from '@/types/globalTypes';

export default function ProjectsPage() {
    const t = useTranslations("ProjectsPage");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleProjectClick = (project: Project) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    return (
        <>
            <div className="container mx-auto lg:px-0 lg:py-25 xl:px-25">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-paper">{t("title")}</h3>
                    <BackButton
                        href="/"
                        label={t("back-button")}
                    />
                </div>

                <p className="mt-2 max-w-2xl text-sm text-muted">
                    {t("sub-description")}
                </p>
                <div className="mt-8 grid auto-rows-min grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mockProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className={
                                index === 0 || index === 1 || index === 6 || index === 7
                                    ? 'col-span-2 row-span-2'
                                    : 'col-span-1'
                            }
                        >
                            <ProjectCard {...project} onClick={() => handleProjectClick(project)} />
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal selectedProject={selectedProject} onClose={handleCloseModal} />
        </>
    );
}