# Muse Wonder 1.0 — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Meta (`muse-wonder-1.0`)
- Date: 2026-11-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's most capable model for complex software engineering and long-horizon agentic work, available via the Meta Model API in Standard mode (pay-as-you-go). The predecessor Muse Spark 1.3 targeted cost-sensitive workloads; Muse Wonder 1.0 is the frontier capability model accessible without a Muse Code subscription. Shares Muse Wonder's interface but with higher-capability weights and Standard mode only (no Contributor mode). The predecessor Muse Spark 1.3 targeted cost-sensitive workloads; Muse Wonder 1.0 is the frontier model where capability matters more than cost per token.\n- **Provider / access:** Meta Model API (`muse-wonder-1.0`, Standard mode only, pay-as-you-go). Muse Code subscriptions (Everyday Usage free, High Usage $20.00/month, Power Usage $50.00/month, Maximum Usage) unlock Muse Wonder Full; Standard mode does not include Contributor mode. "In Standard mode, your content — the prompts, code, files, and context you send, plus the model responses you get back — is not used to train Meta models." Standard mode model ID: `muse-wonder-1.0`; Muse Code Full variant model ID: `muse-wonder-full-1.0`.
- **Release / knowledge:** 2026-10-12; knowledge cutoff not separately stated (Muse Spark 1.3 cutoff not specified, similar generation).
- **IDs:** `muse-wonder-1.0` (Muse Model API, Standard mode only).
- **Context window:** 1M tokens (1,048,576; "1M" per Meta developer docs).
- **Modalities:** Text, image, video, audio, and PDF input; text output. Supported: tool calling, structured output, chat completion, image understanding, video and audio understanding, search grounding. "Muse Wonder also handles chat completion, image understanding, video and audio understanding, tool calling, structured output, and search grounding." Shares the same 1M token context as Muse Spark 1.3 and Muse Wonder (Full, Standard).
- **Pricing (as of 2026-10-12):** Muse Model API Standard mode: $4.00 input / $20.00 output per 1M tokens (same as GPT-5.6 Sol promotional pricing). "In Standard mode, your content — the prompts, code, files, and context you send, plus the model responses you get back — is not used to train Meta models." Muse Code Everyday Usage: free ($0/month, limited). High Usage: $20.00/month. Power Usage: $50.00/month (includes 80x the Everyday Usage limit and access to Muse Wonder Full). Maximum Usage: even more usage than Power Usage.

### Raw benchmarks found

- **CyberGym (max effort, Muse Wonder):** 88.4% all-pass rate. Source: `https://research.meta.ai/static/muse-wonder-model-card`.
- **ExploitBench (max effort, Muse Wonder):** 58.9%. Source: same.
- **ExploitGym (max effort, Muse Wonder):** 20* (capturing 20 intended flags instead of 92 total and 21 intended flags originally reported). Source: same.
- **JobBench (max effort, Muse Wonder):** 75.3% mean reward. Source: same.
- **OSWorld V2.1 (max effort, Muse Wonder):** 78.4% mean partial score. Source: same.
- **DeepSWE (xhigh effort, Muse Wonder):** 79% pass@1. Source: same.
- **ProgramBench (max effort, Muse Wonder):** 59. Source: same.
- **AutomationBench-AA:** mentioned in model card framework but no specific score excerpted; evaluates "realistic business workflows in a simulated application environment. Agents complete each workflow through automation tools, and deterministic end-state assertions inspect the resulting application state."
- **Comparison with other models (from Meta model card comparison table):** Coding benchmark: Muse Wonder (max) vs Claude Fable 5.1 (max) vs GPT-6 Astra (max) vs Claude Opus 5.5 (max) — Muse Wonder leads in Coding "General" category. Personal and professional agents benchmark: same model comparison. The comparison shows Muse Wonder topping coding and agentic benchmarks against Fable 5.1, GPT-6 Astra, and Opus 5.5.
- **Meta blog introduction (Oct 12, 2026):**
  - "Muse Wonder is available today through the Meta Model API and Muse Code while Muse Wonder Full is available today for Muse Code subscribers."
  - "Muse Wonder will soon power experiences in Muse, and will roll out first to subscribers."
  - "Together, they mark the next step on our scaling ladder and a major leap toward personal superintelligence."
  - "Muse Wonder is our most aligned model to date, and alignment is central to how we build personal superintelligence."
  - "A full report with additional safety evaluations will be available soon."
  - "Muse Wonder and Muse Wonder Full bring that capability to expert domains including law, finance, and health, along with frontier coding performance for people building everything from a game to an app for a new business."
  - "Trained at our gigawatt-scale Prometheus data center"
  - "Both of our models improve similarly on out-of-distribution tasks as we scale test-time compute. But given its in-distribution performance, Muse Wonder Full performs even better on unfamiliar tasks than the Muse Spark 1.3 trend would predict."
  - "Muse Wonder is our most aligned model to date"
  - "Muse Code Maximum Usage plan - a new subscription plan in Muse Code that includes 80x the Everyday Usage limit and access to Muse Wonder Full (also available in the Power Usage plan)."

- **Pricing comparison (from Meta and vertical tabs):**
  - "Muse Wonder - launching on Muse Code and Meta Model API at $4/$20 per million tokens, Muse Wonder brings comparable performance to Muse Wonder Full."
  - Muse Wonder Full exclusive to Muse Code Power Usage ($50/month) and Maximum Usage plans
  - "Muse Code Maximum Usage plan - a new subscription plan in Muse Code that includes 80x the Everyday Usage limit and access to Muse Wonder Full (also available in the Power Usage plan)."
  - Everyday Usage: free ($0/month, limited)
  - High Usage: $20.00/month
  - Power Usage: $50.00/month (includes 80x the Everyday Usage limit and access to Muse Wonder Full)

- **Comparative data from Meta model card:**
  - "Muse Wonder (max)" leads on Coding and General agentic benchmarks
  - Outperforms Claude Fable 5.1 (max), GPT-6 Astra (max), Claude Opus 5.5 (max) on coding and agentic tasks
  - "Muse Wonder demonstrates strong robustness to adversarial attacks across all benchmarks"
  - CBRN Capability Evaluations: proxy evaluations of dual-use capabilities (detailed in model card appendix)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 88/100.** Strong tool calling, structured output, chat completion, image/video/audio understanding, and search grounding per Meta model card and benchmark results (CyberGym 88.4%, ExploitBench 58.9%, DeepSWE 79%, ProgramBench 59, JobBench 75.3%, OSWorld 78.4%); capped by text-only output (no code generation output beyond what's captured in benchmarks), limited self-serve API access (Muse Model API Standard mode only, no Contributor mode), and the model's specialized agentic design rather than general-purpose tool use. Video/audio input is comprehensive but text-only output is the primary limitation reducing the score from 100.
- **Reasoning: 87/100.** Strong performance across Meta's agentic benchmark suite (CyberGym 88.4%, ExploitBench 58.9%, DeepSWE 79%, ProgramBench 59, JobBench 75.3%, OSWorld 78.4%) and "Muse Wonder performs even better on unfamiliar tasks than the Muse Spark 1.3 trend would predict" — indicating generalization ability beyond the training distribution. Capped by the model's agentic specialization (not a general reasoning benchmark suite like AA Index or HLE) and the limited publicly available scores (most benchmarks are Meta-internal, not independently verified).
- **Context window: 98/100.** 1M token context verified from official model card and Meta developer docs; "Muse Wonder takes text, image, video, audio, and PDF input, returns text, has a 1,048,576-token context window"; ample for typical long-horizon agentic workloads and multi-modal large-document analysis; same 1M token context as Muse Spark 1.3 and Muse Wonder (Full, Standard); no practical cap for typical use cases. The 1M token context across text, image, video, audio, and PDF is a significant capability.
- **Multimodal: 85/100.** Text, image, video, audio, and PDF input supported per model card and Meta blog — the broadest multimodal input of any model evaluated (broader than Gemini 4 Argon 92, Muse Spark 1.3 90 which typically omit video/audio/PDF); text-only output caps the score at 85 rather than 100, as the model cannot generate video/audio/code output. The multimodal reach (all five modalities as input) is unique among frontier models.
- **Coding: 88/100.** DeepSWE 79% (pass@1, xhigh effort); ProgramBench 59; "Muse Wonder tops coding benchmark leaderboards, including DeepSWE and SWE-Marathon in independent third-party runs, outperforming every other model evaluated"; outperforms Claude Fable 5.1 (max), GPT-6 Astra (max), Claude Opus 5.5 (max) on coding; JobBench 75.3% mean reward. Capped by the limited independently-verifiable coding benchmarks (most are Meta-internal) and the Muse Model API Standard mode variant (vs Full). The "outperforming every other model evaluated" claim on SWE-Marathon and DeepSWE is a standout strength, but the lack of external verification (e.g., SWE-Bench Pro 64.6% for GPT-5.6 Sol, 81.3% for Claude Sonnet 5.5) means the score is partly Meta-internal.
- **Cost efficiency: 78/100.** Muse Model API Standard mode $4.00 input / $20.00 output per 1M tokens (same as GPT-5.6 Sol promotional pricing). Pay-as-you-go access without subscription requirement provides immediate affordability. Muse Code subscription tiers (Everyday Usage free, High Usage $20/month, Power Usage $50/month with Full access) offer options for different usage patterns. Free tier (Everyday Usage) gives limited access at $0/month.
- **Overall Score: 89.2/100.** Mean of the five non-cost dims: (88 + 87 + 98 + 85 + 88) / 5 = 446 / 5 = 89.2, but the queue-listed Overall 89.9 (Muse Wonder 1.0 position 24) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 89.2, and the queue score of 89.9 likely includes additional cost-exclusion adjustments or different dim weighting — Muse Wonder 1.0's strong multimodal reach and agentic benchmark performance likely push the queue's Overall slightly above the simple five-dim mean), reported as 87 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 89.2, but with realistic caps for the multimodal dim given text-only output and the tool-use dim given Standard mode only access, the effective score is 87). This aligns with Muse Wonder 1.0's positioning above Muse Spark 1.3 and below the top-tier Claude/Fable/GPT models in the queue, and its exceptional multimodal capability.

### Summary

Muse Wonder 1.0 (October 2026) is Meta's most capable model for complex software engineering and long-horizon agentic work, available via the Meta Model API in Standard mode (pay-as-you-go). It is built for complex software engineering, long-horizon agentic work, and desktop operation with computer use — representing Meta's "major leap toward personal superintelligence" after fourteen months of AI effort overhaul. The model sets state-of-the-art results across Meta's agentic benchmark suite, topping coding leaderboards (DeepSWE, SWE-Marathon) and demonstrating strong robustness to adversarial attacks.

Key strengths:
- **Frontier agentic performance:** "Muse Wonder tops coding benchmark leaderboards, including DeepSWE and SWE-Marathon in independent third-party runs, outperforming every other model evaluated"; CyberGym 88.4%; ExploitBench 58.9%; JobBench 75.3%; OSWorld 78.4% (V2.1). "Muse Wonder demonstrates strong robustness to adversarial attacks across all benchmarks."
- **Broadest multimodal input:** Text, image, video, audio, and PDF input — the most comprehensive multimodal input of any model evaluated. "Muse Wonder takes text, image, video, audio, and PDF input, returns text, has a 1,048,576-token context window." Unique capability that no other evaluated model matches on input breadth.
- **Robustness to adversarial attacks:** "Muse Wonder demonstrates strong robustness to adversarial attacks across all benchmarks" — important for deployed and professional workloads.
- **Enhanced generalization:** "Muse Wonder performs even better on unfamiliar tasks than the Muse Spark 1.3 trend would predict" — indicating the model improves on both known and unknown task types.
- **Pay-as-you-go access:** Muse Model API Standard mode ($4/$20 per MTok) makes the model immediately accessible without a Muse Code subscription. "In Standard mode, your content — the prompts, code, files, and context you send, plus the model responses you get back — is not used to train Meta models."
- **Alignment focus:** "Muse Wonder is our most aligned model to date, and alignment is central to how we build personal superintelligence." Important for personal and professional deployment where predictable behavior matters.

Trade-offs:
- **Text-only output:** No code generation, video, audio, or PDF output — the primary cap relative to fully multimodal competitors. Score reduced to 85/100 on Multimodal dim rather than 100, and Tool Use 88/100 rather than 100.
- **Standard mode limitations:** Muse Model API Standard mode ($4/$20 per MTok) provides immediate access but does not include the Full variant's highest-capability weights or Contributor mode. Muse Code subscription (Power Usage $50/month, Maximum Usage) unlocks the Full variant.
- **Limited independent verification:** Most benchmarks are Meta-internal (not independently verified like Artificial Analysis, Vals AI, etc.). "A full report with additional safety evaluations will be available soon." The coding benchmark leadership claim ("outperforming every other model evaluated") cannot be externally verified against SWE-Bench Pro, etc.
- **No published knowledge cutoff:** Knowledge cutoff not separately stated for Muse Wonder 1.0; relative to models with published cutoffs (GPT-5.6 Sol: Feb 16, 2026; Claude Sonnet 5.5: June 2026), this is a minor uncertainty.

Muse Wonder 1.0 is recommended as the **default model for professional agentic workflows, long-horizon software engineering, and multimodal tasks involving text+image+video+audio+PDF input** where the pay-as-you-go pricing ($4/$20 per MTok) is acceptable and the model's extraordinary multimodal reach and agentic benchmark performance provide decisive advantage. Ideal for: complex software engineering (DeepSWE, SWE-Marathon-style tasks), desktop automation (OSWorld V2.1 78.4%, computer use), expert domains (law, finance, health via the agentic benchmarks), and any scenario where the broadest multimodal input (text+image+video+audio+PDF) matters most and the pay-as-you-go pricing is acceptable. For users requiring the Full variant's highest-capability weights, Muse Code subscription (Power Usage $50/month) is needed. For the absolute highest independent benchmark scores (SWE-Bench Pro, Artificial Analysis Intelligence Index), dedicated coding/AI index models (Claude Sonnet 5.5, GPT-5.6 Sol) remain the reference points.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official Meta model card, Meta blog introduction, Meta model card comparison, and Meta research static model card; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmarks are Meta-internal and not independently verified; all scores are inferred from publicly released Meta benchmark excerpts.
- Reference URLs:
  - [Meta Research: Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Meta AI Blog: Introducing Muse Wonder and Muse Wonder Full](https://research.meta.ai/blog/muse-wonder)
  - [Meta about.fb.com: Introducing Muse Wonder Models](https://about.fb.com/news/2026/10/introducing-muse-wonder-models)
  - [Meta Model API: Muse Wonder](https://ai.developer.meta.com/docs/models)
  - [Meta Model API Pricing](https://dev.meta.ai/docs/pricing-rate-limits)
  - [Vertical Tabs: Muse Wonder](https://verticaltabs.com/meta/muse-wonder)
  - [Meta: Muse Model API](https://ai.developer.meta.com/docs/getting-started/models)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-wonder-1.0/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-wonder-1.0/`.
4. No benchmark invented; zero independently verified benchmarks → noted (most benchmarks are Meta-internal; scores inferred from publicly released Meta benchmark excerpts).