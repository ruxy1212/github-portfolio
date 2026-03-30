import { SanitizedConfig } from '../../interfaces/sanitized-config';
import PublicationCard from '../publication-card';
import BlogCard from '../blog-card';

export const renderPackagesTab = ({
  sanitizedConfig,
  loading,
}: {
  sanitizedConfig: SanitizedConfig | Record<string, never>;
  loading: boolean;
}) => (
  <div className="grid grid-cols-1 gap-6">
    {sanitizedConfig.publications.length > 0 && (
      <PublicationCard
        loading={loading}
        publications={sanitizedConfig.publications}
      />
    )}
    {sanitizedConfig.blog.display && (
      <BlogCard
        loading={loading}
        googleAnalyticsId={sanitizedConfig.googleAnalytics.id}
        blog={sanitizedConfig.blog}
      />
    )}
    {sanitizedConfig.publications.length === 0 &&
      !sanitizedConfig.blog.display && (
        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body text-sm text-base-content/70">
            No package content configured yet.
          </div>
        </div>
      )}
  </div>
);
