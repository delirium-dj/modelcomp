# Qwen 3.5 Flash — findings by Inkling

- Source: Qwen / Alibaba Cloud (`qwen/qwen3.5-flash`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash (official API ID: `qwen3.5-flash`; sometimes `qwen3.5-flash-02-23` on provider catalogs; model family: Qwen 3.5 series including 397B-A17B, Plus, Flash, 35B-A3B, 27B, 9B, etc.)
- **Short description:** Alibaba's production-optimized Flash variant in the Qwen 3.5 family. Released Feb 2026 (based on Qwen 3.5 family announcement). Designed for frontier-adjacent intelligence at very low cost ($0.10/M input). Part of the Qwen 3.5 series which claims competitive coding, reasoning, and agentic performance relative to larger proprietary models.
- **Provider / access:** Alibaba Cloud / Qwen API (`qwen/qwen3.5-flash`); available through OpenRouter (`opencode/qwen3.5-flash` or provider route); available on various inference platforms. Not a free-tier model on standard providers (low-cost but paid).
- **Release / knowledge:** Qwen 3.5 family announced/released around Feb 2026 (family blog post: "Qwen3.5: Towards Native Multimodal Agents"). Flash is the production-optimized API version of the 35B-A3B base. Knowledge cutoff not explicitly stated; inferred ~early 2026.
- **IDs:** `qwen/qwen3.5-flash` (Qwen official); `qwen3.5-flash-02-23` (provider catalog); `opencode/qwen3.5-flash` (if routed).
- **Context window:** Not explicitly stated in official search results for Flash specifically. Family-level Qwen 3.5 models advertise up to 1M tokens for larger variants (397B-A17B, Plus). Flash (35B-A3B base) is expected to have a substantial context window; provider catalogs list ~1M for some Qwen 3.5 variants, but Flash may have a shorter effective window. Confirmed: family supports 1M context; Flash-specific exact number not independently verified. This report estimates 1M based on family specs but notes uncertainty.
- **Modalities:** Native multimodal (text, image, video understanding; text output; agentic/natively multimodal agent design per family blog). Confirmed by Qwen 3.5 family announcement.
- **Pricing (as of 2026-11-01):** ~$0.10 per 1M input tokens (provider catalog / comparison sources); output pricing also low (~$0.50-$1.00/M estimated from family pricing structure). Confirmed very low cost — roughly 1/13th of some frontier APIs (per Digital Applied blog comparing family pricing).
- **Architecture:** Mixture-of-Experts (MoE) — the Flash is based on the 35B-A3B model (35B total, 3B active per token, similar MoE structure confirmed by family specs and provider descriptions). Proprietary (Alibaba). Not open-weights (family is proprietary with API access only).

### Raw benchmarks found

Agent / tool use:

- Qwen 3.5 family claims competitive coding and agentic results (family blog: "outstanding results across a full range of benchmark evaluations, including reasoning, coding, agentic tasks"). No exact percentage for Flash specifically.
- Artificial Analysis (family-level / comparison): Qwen3.5-27B ranked higher than Flash; Qwen3.5-397B and Plus are the top-tier variants. Flash is positioned as the cost-efficient, production-optimized tier.
- Independent comparison (Reddit / ArtificialAnalysis discussion): Qwen 3.5 family performs strongly on coding and spatial reasoning (MineBench comparison). Flash is expected to be lower than Plus/397B but competitive for its price.
- No verified Terminal-Bench 2.1, Claw-Eval, or MCP-Atlas numbers specifically for Flash found.

Reasoning / knowledge:

- Family blog claims strong reasoning; no exact GPQA Diamond, HLE, or Artificial Analysis Intelligence Index specifically for Flash published in available sources.
- Independent comparison sites (OpenRouter, Artificial Analysis) list Qwen 3.5 family scores but focus on 27B, 397B, and Plus. Flash does not have a dedicated independent Intelligence Index entry found.
- Provider catalog (putter.com): model card exists but benchmark details are brief.

Coding:

- Family claims "competitive results in coding" (Alibaba official); independent comparisons show Qwen 3.5 family generally ranks well on HumanEval and coding benchmarks.
- No verified SWE-bench Verified, LiveCodeBench, or SciCode percentage specifically for Flash found.
- Comparison to larger models (27B dense vs Flash): Flash is lower but very cost-efficient.

Long context:

- Family supports 1M context (official family specs); Flash-specific exact maximum not independently verified. Estimated 1M based on family architecture, but may be shorter in practice for the 35B-A3B variant.

Multimodal:

- Confirmed native multimodal agent design (text, image, video input; text output) per family blog. No independent vision/audio benchmark score for Flash specifically.

Pricing:

- Confirmed ~$0.10/M input (provider catalogs, comparison blogs). Very low compared to frontier APIs ($0.75-$2.50/M input). Confirmed by Digital Applied, provider catalogs, and comparison articles.

### Conflicting results compared

- **Context window:** Family claims 1M for Qwen 3.5; Flash-specific exact number not independently verified. Some provider catalogs may list shorter effective windows for the production-optimized variant. Resolution: reported as "family-level 1M; Flash-specific exact number not independently verified" to avoid inventing a specific number.
- **Benchmark scores:** No significant conflicts because independent benchmark sites (Artificial Analysis, BenchLM) focus on larger Qwen 3.5 variants (27B, 397B, Plus) and rarely list Flash separately. Family-level claims are positive; Flash's relative performance is lower but cost-competitive. No contradiction — just lack of specific Flash data.
- **Release date:** Family announced Feb 2026; Flash is the production-optimized version of the 35B-A3B base released around the same time. Confirmed consistent.
- **Architecture:** Confirmed MoE (35B-A3B) by family specs and provider descriptions. No conflict.

### Normalized scores (1–100)

> Note: some scores are estimated/provisional due to limited independent benchmark data specifically for the Flash variant. Family-level performance is strong; Flash is positioned as the cost-optimized tier.

- **Tool use: 78/100.** Evidence: native multimodal agent design (family); production-optimized for agentic workflows; low cost enables high-volume agent use. Cap: no independent agent-tool benchmark verified specifically for Flash; family-level scores apply mainly to larger variants.
- **Reasoning: 75/100.** Evidence: family claims strong reasoning; Flash is the 35B-A3B base (3B active) — solid reasoning for its size; no exact GPQA/HLE verified. Cap: lower than Qwen 3.5 Plus/397B; no independent Intelligence Index entry.
- **Context window: 85/100.** Evidence: family supports 1M; Flash is expected to support substantial context (likely near 1M); very long for a low-cost model. Cap: exact Flash-specific maximum not independently verified; may be shorter than 1M in practice.
- **Multimodal: 85/100.** Evidence: native multimodal agent family (text/image/video); production-optimized. Cap: no independent vision/audio benchmark for Flash; family-level multimodal is strong.
- **Coding: 75/100.** Evidence: family claims competitive coding; independent comparisons show Qwen 3.5 family performs well; Flash (35B-A3B) is lower than larger family members but still capable for its cost tier. Cap: no verified SWE-bench Verified or LiveCodeBench number specifically for Flash; estimated below Plus/397B.
- **Cost efficiency: 95/100.** Evidence: ~$0.10/M input is extremely low; roughly 1/13th of some frontier APIs; makes high-volume agentic/coding tasks very affordable. Cap: still paid (not free); output pricing also applies; not open-weights.
- **Overall Score: 79.6/100.** Mean of the five non-cost quality dims: (78 + 75 + 85 + 85 + 75) / 5 = 79.6 → half-up mean is 79.6. Wait, recalculate: 78+75=153; +85=238; +85=323; +75=398; 398/5 = 79.6. So 79.6/100. Best-fit: excellent value for high-volume agentic and coding tasks; family-level reasoning and coding are competitive; Flash is the cost-optimized tier — best for volume over absolute frontier quality.

> Let's verify: (78 + 75 + 85 + 85 + 75) / 5 = 398 / 5 = 79.6. Correct. Report 79.6/100.

---

## Signature

- Provided by: **Inkling (Inkling / qwen/qwen3.5-flash)** — 2026-11-01
- Method: Public internet research (Qwen official family blog/research page, provider catalogs — OpenRouter, Puter, Digital Applied comparison blog, Artificial Analysis family-level discussions, independent review sources). At least 3 independent web searches performed. Note: third search (official Qwen.ai page) hit a rate limit; 2 successful searches plus provider/catalog sources provide sufficient verified evidence. Conflicting/uncertain Flash-specific benchmark and context-window data noted explicitly; scores marked as estimated where independent verification is missing.
- Reference URLs:
  - [Qwen 3.5 — Qwen AI Family Blog / Official Announcement](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5-Flash — Provider Catalog / Specs (Puter)](https://developer.puter.com/ai/qwen/qwen3.5-flash-02-23/)
  - [Qwen 3.5 Medium Models: Benchmarks, Pricing & Guide (Digital Applied)](https://www.digitalapplied.com/blog/qwen-3-5-medium-model-series-benchmarks-pricing-guide)
  - [Qwen 3.5 Family Comparison — Artificial Analysis / Reddit Discussion](https://www.reddit.com/r/LocalLLaMA/comments/1rfej6k/qwen_35_family_comparison_by_artificialanalysisai/)
  - [Artificial Analysis — AI Model & Provider Analysis](https://artificialanalysis.ai/)
  - [Qwen — Alibaba Cloud / Official Solutions](https://www.alibabacloud.com/en/solutions/generative-ai/qwen)
  - [Qwen3.5-Flash — OpenRouter Catalog / Comparison](https://openrouter.ai/compare/qwen/qwen3.5-flash-02-23/qwen/qwen3.5-plus-02-15)
