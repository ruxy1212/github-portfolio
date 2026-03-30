import { Dispatch, SetStateAction } from 'react';
import LazyImage from '../lazy-image';
import { skeleton } from '../../utils';

type UnifiedProject = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  year: string;
  stack: string[];
  media: string[];
  link: string;
  repo: string;
};

export const renderProjectsTab = ({
  unifiedProjects,
  expandedProjectId,
  setExpandedProjectId,
}: {
  unifiedProjects: UnifiedProject[];
  expandedProjectId: string | null;
  setExpandedProjectId: Dispatch<SetStateAction<string | null>>;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    <section className="lg:col-span-12 space-y-6">
      <div className="card bg-base-100 border border-base-300 shadow-sm overflow-hidden">
        <div className="bg-base-200 px-4 py-3 border-b border-base-300 font-semibold text-sm">
          Projects
        </div>
        <div className="divide-y divide-base-300">
          {unifiedProjects.map((project) => {
            const isOpen = expandedProjectId === project.id;

            return (
              <div key={project.id}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-base-200 transition-colors"
                  onClick={() =>
                    setExpandedProjectId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                    <div className="sm:w-1/3 font-medium text-primary truncate">
                      {project.name}
                    </div>
                    <div className="sm:w-1/2 truncate text-base-content/80">
                      {project.shortDescription}
                    </div>
                    <div className="sm:w-1/6 text-base-content/70 sm:text-right">
                      {project.year}
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4">
                    <div className="card bg-base-100 border border-base-300 shadow-sm">
                      <div className="card-body">
                        <h4 className="font-semibold text-base">
                          {project.name}
                          <span className="ms-2 badge badge-neutral badge-sm text-xs">
                            {project.year}
                          </span>
                        </h4>
                        <p className="text-sm text-base-content/80">
                          {project.fullDescription || project.shortDescription}
                        </p>

                        <div className="flex items-center flex-wrap gap-2 pt-1">
                          {project.stack.map((item) => (
                            <span
                              key={item}
                              className="badge badge-neutral badge-md text-xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        {!!project.media.length && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {project.media.map((item, index) => (
                              <div key={index} className="avatar opacity-90">
                                <div className="mask mask-squircle">
                                  <LazyImage
                                    src={item}
                                    alt={'thumbnail'}
                                    placeholder={skeleton({
                                      widthCls: 'w-full',
                                      heightCls: 'h-full',
                                      shape: '',
                                    })}
                                    className="w-full h-44 object-cover"
                                  />
                                </div>
                              </div>
                              // <a
                              //   key={`${project.id}-${index}`}
                              //   href={item}
                              //   target="_blank"
                              //   rel="noreferrer"
                              //   className="block rounded-lg overflow-hidden border border-base-300"
                              // >
                              //   <img
                              //     src={item}
                              //     alt={project.name}
                              //     className="w-full h-44 object-cover"
                              //   />
                              // </a>
                            ))}
                          </div>
                        )}

                        <div className="flex gap-2">
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-outline"
                            >
                              View Project
                            </a>
                          )}
                          {project.repo && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-primary"
                            >
                              Open Repo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  </div>
);
