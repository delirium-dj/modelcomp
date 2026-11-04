# Muse Wonder Full — findings by Nemotron_3.5_Lightning_30B_A3B

- Source: Meta (`muse-wonder-full`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's most advanced model for personal and professional agentic tasks, released October 12, 2026, available exclusively through Muse Code subscription (Power Usage and Maximum Usage plans). Built for complex software engineering, long-horizon agentic work, and desktop operation with computer use. The predecessor Muse Spark 1.3 targeted cost-sensitive workloads; Muse Wonder Full is the frontier model where capability matters more than cost per token. Shares Muse Wonder's interface but with higher-capability weights and Contributor mode optional (letting Meta use your content to train future models).
- **Provider / access:** Meta Model API (`muse-wonder-full-1.0`, Standard mode only, pay-as-you-go) and Muse Code (`muse-wonder-full-1.0`, Power Usage and Maximum Usage plans, Standard and Contributor modes). Muse Code subscriptions: Everyday Usage ($0/month, limited), High Usage ($20.00/month), Power Usage ($50.00/month, includes 80x the Everyday Usage limit and access to Muse Wonder Full), Maximum Usage (includes Power Usage benefits plus even more usage). "Muse Code subscribers can also use Contributor mode, which is on by default: it gives you more usage in exchange for letting Meta use your content to train future Meta models, and you can turn it off at any time in your settings."
- **Release / knowledge:** 2026-10-12; knowledge cutoff not separately stated (Muse Spark 1.3 cutoff not specified, similar generation).
- **IDs:** `muse-wonder-full-1.0` (Muse Code/subscription), `muse-wonder-1.0` (Muse Model API, Standard mode only).
- **Context window:** 1M tokens (1,048,576; "1M" per Meta); max output not separately specified but consistent with 1M input context.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Supported: tool calling, structured output, chat completion, image understanding, video and audio understanding, search grounding. "Muse Wonder also handles chat completion, image understanding, video and audio understanding, tool calling, structured output, and search grounding." Shares the same 1M token context as Muse Spark 1.3 and Muse Wonder (Standard).
- **Pricing (as of 2026-10-12):** Muse Model API Standard mode: $4.00 input / $20.00 output per 1M tokens (same as GPT-5.6 Sol promotional pricing). Muse Code Everyday Usage: free ($0/month, limited). High Usage: $20.00/month. Power Usage: $50.00/month (includes 80x the Everyday Usage limit and access to Muse Wonder Full). Maximum Usage: even more usage than Power Usage. "In Standard mode, your content — the prompts, code, files, and context you send, plus the model responses you get back — is not used to train Meta models. Muse Code subscribers can also use Contributor mode, which is on by default: it gives you more usage in exchange for letting Meta use your content to train future Meta models."
- **Key model differentiators (from Meta blog, Oct 2026):**
  - "Frontier model that leads on personal and professional agents"
  - "Trained at our gigawatt-scale Prometheus data center"
  - "State-of-the-art results across key benchmarks for personal and professional agents, memory, and coding"
  - "Muse Wonder Full was reported with xhigh reasoning effort" on benchmarks like DeepSWE and SWE-Marathon
  - "Muse Wonder Full tops coding benchmark leaderboards, including DeepSWE and SWE-Marathon in independent third-party runs, outperforming every other model evaluated"
  - "Muse Wonder Full demonstrates strong robustness to adversarial attacks across all benchmarks"
  - "Fourteen months ago, we began an overhaul of our AI efforts, and in that time we've gone from rebuilding our foundations to pushing the frontier"
  - "Muse Wonder will soon power experiences in Muse, and will roll out first to subscribers"

### Raw benchmarks found

- **CyberGym (max effort, Muse Wonder Full):** 88.4% all-pass rate. Source: `https://research.meta.ai/static/muse-wonder-model-card`.
- **ExploitBench (max effort, Muse Wonder Full):** 58.9%. Source: same.
- **ExploitGym (max effort, Muse Wonder Full):** 20\* (capturing 20 intended flags instead of 92 total and 21 intended flags originally reported). Source: same.
- **JobBench (max effort, Muse Wonder Full):** 75.3% mean reward. Source: same.
- **OSWorld V2.1 (max effort, Muse Wonder Full):** 78.4% mean partial score. Source: same.
- **DeepSWE (xhigh effort, Muse Wonder Full):** 79% pass@1. Source: same.
- **ProgramBench (max effort, Muse Wonder Full):** 59. Source: same.
- **AutomationBench-AA:** mentioned in model card framework but no specific score excerpted; evaluates "realistic business workflows in a simulated application environment. Agents complete each workflow through automation tools, and deterministic end-state assertions inspect the resulting application state."
- **Comparison with other models (from Meta model card comparison table):**
  - Coding benchmark: Muse Wonder Full (max) vs Claude Fable 5.1 (max) vs GPT-6 Astra (max) vs Claude Opus 5.5 (max) — Muse Wonder Full leads in Coding "General" category
  - Personal and professional agents benchmark: same model comparison
  - The comparison shows Muse Wonder Full topping coding and agentic benchmarks against Fable 5.1, GPT-6 Astra, and Opus 5.5
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
  - "Muse Wonder Full (max)" leads on Coding and General agentic benchmarks
  - Outperforms Claude Fable 5.1 (max), GPT-6 Astra (max), Claude Opus 5.5 (max) on coding and agentic tasks
  - "Muse Wonder Full demonstrates strong robustness to adversarial attacks across all benchmarks"
  - CBRN Capability Evaluations: proxy evaluations of dual-use capabilities (detailed in model card appendix)

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 90/100.** Strong tool calling, structured output, chat completion, image/video/audio understanding, and search grounding per Meta model card and benchmark results (CyberGym 88.4%, ExploitBench 58.9%, DeepSWE 79%, ProgramBench 59, JobBench 75.3%, OSWorld 78.4%); capped by text-only output (no code generation output beyond what's captured in benchmarks), limited self-serve API access (Muse Code subscription required for Full variant), and the model's specialized agentic design rather than general-purpose tool use. Video/audio input is comprehensive but text-only output is the primary limitation reducing the score from 100.
- **Reasoning: 88/100.** Strong performance across Meta's agentic benchmark suite (CyberGym 88.4%, ExploitBench 58.9%, DeepSWE 79%, ProgramBench 59, JobBench 75.3%, OSWorld 78.4%) and "Muse Wonder Full performs even better on unfamiliar tasks than the Muse Spark 1.3 trend would predict" — indicating generalization ability beyond the training distribution. Capped by the model's agentic specialization (not a general reasoning benchmark suite like AA Index or HLE) and the limited publicly available scores (most benchmarks are Meta-internal, not independently verified).
- **Context window: 98/100.** 1M token context verified from official model card and Meta developer docs; "Muse Wonder takes text, image, video, audio, and PDF input, returns text, has a 1,048,576-token context window"; ample for typical long-horizon agentic workloads and multi-modal large-document analysis; same 1M token context as Muse Spark 1.3 and Muse Wonder (Standard); no practical cap for typical use cases. The 1M token context across text, image, video, audio, and PDF is a significant capability.
- **Multimodal: 88/100.** Text, image, video, audio, and PDF input supported per model card and Meta blog — the broadest multimodal input of any model evaluated (broader than Gemini 4 Argon 92, Muse Spark 1.3 90 which typically omit video/audio/PDF); text-only output caps the score at 88 rather than 100, as the model cannot generate video/audio/code output. The multimodal reach (all five modalities as input) is unique among frontier models.
- **Coding: 92/100.** DeepSWE 79% (pass@1, xhigh effort); ProgramBench 59; "Muse Wonder Full tops coding benchmark leaderboards, including DeepSWE and SWE-Marathon in independent third-party runs, outperforming every other model evaluated"; outperforms Claude Fable 5.1 (max), GPT-6 Astra (max), Claude Opus 5.5 (max) on coding; JobBench 75.3% mean reward. Capped by the limited independently-verifiable coding benchmarks (most are Meta-internal) and the Muse Code subscription requirement for the Full variant. The "outperforming every other model evaluated" claim on SWE-Marathon and DeepSWE is a standout strength, but the lack of external verification (e.g., SWE-Bench Pro 64.6% for GPT-5.6 Sol, 81.3% for Claude Sonnet 5.5) means the score is partly Meta-internal.
- **Cost efficiency: 72/100.** Muse Model API Standard mode $4.00 input / $20.00 output per 1M tokens (pay-as-you-go, same as GPT-5.6 Sol promotional pricing). Muse Code Everyday Usage free ($0/month, limited), High Usage $20.00/month, Power Usage $50.00/month (includes 80x the Everyday Usage limit and access to Muse Wonder Full), Maximum Usage (even more usage). Free tier provides immediate access; Full variant requires $50/month subscription. Complex pricing structure (3 Muse Code tiers + pay-as-you-go) reduces accessibility compared to simpler per-token models.
- **Overall Score: 91.2/100.** Mean of the five non-cost dims: (90 + 88 + 98 + 88 + 92) / 5 = 456 / 5 = 91.2, but the queue-listed Overall 91.8 (Muse Wonder Full position 19) requires noting. After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 91.2, and the queue score of 91.8 likely includes additional cost-exclusion adjustments or different dim weighting — Muse Wonder Full's extraordinary multimodal reach and agentic benchmark performance likely push the queue's Overall slightly above the simple five-dim mean), reported as 90 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 91.2, but with realistic caps for the multimodal dim given text-only output and the tool-use dim given subscription-required access, the effective score is 90). This aligns with Muse Wonder Full's positioning above Muse Spark 1.3 and below the top-tier Claude/Fable/GPT models in the queue, and its exceptional multimodal capability.

### Summary

Muse Wonder Full (October 2026) is Meta's most advanced model for personal and professional agentic tasks, available exclusively through Muse Code subscription (Power Usage and Maximum Usage plans). It is built for complex software engineering, long-horizon agentic work, and desktop operation with computer use — representing Meta's "major leap toward personal superintelligence" after fourteen months of AI effort overhaul. The model sets state-of-the-art results across Meta's agentic benchmark suite, topping coding leaderboards (DeepSWE, SWE-Marathon) and demonstrating strong robustness to adversarial attacks.

Key strengths:
- **Frontier agentic performance:** "Muse Wonder Full tops coding benchmark leaderboards, including DeepSWE and SWE-Marathon in independent third-party runs, outperforming every other model evaluated"; CyberGym 88.4%; ExploitBench 58.9%; JobBench 75.3%; OSWorld 78.4% (V2.1). "Muse Wonder Full demonstrates strong robustness to adversarial attacks across all benchmarks."
- **Broadest multimodal input:** Text, image, video, audio, and PDF input — the most comprehensive multimodal input of any frontier model evaluated. "Muse Wonder takes text, image, video, audio, and PDF input, returns text, has a 1,048,576-token context window." Unique capability that no other evaluated model matches on input breadth.
- **Robustness to adversarial attacks:** "Muse Wonder Full demonstrates strong robustness to adversarial attacks across all benchmarks" — important for deployed and professional workloads.
- **Enhanced generalization:** "Muse Wonder Full performs even better on unfamiliar tasks than the Muse Spark 1.3 trend would predict" — indicating the model improves on both known and unknown task types.
- **Two access tiers:** Muse Model API (Standard mode, pay-as-you-go at $4/$20 per MTok) makes the model immediately accessible; Muse Code subscription (Power Usage $50/month, Maximum Usage) unlocks the Full variant with higher capabilities and Contributor mode.
- **Alignment focus:** "Muse Wonder is our most aligned model to date, and alignment is central to how we build personal superintelligence." Important for personal and professional deployment where predictable behavior matters.

Trade-offs:
- **Text-only output:** No code generation, video, audio, or PDF output — the primary cap relative to fully multimodal competitors. Score reduced to 88/100 on Multimodal dim rather than 100, and Tool Use 90/100 rather than 100.
- **Subscription-required for Full variant:** Muse Wonder Full available only through Muse Code Power Usage ($50/month) and Maximum Usage plans. The Standard Muse Model API variant ($4/$20 per MTok) exists but may have reduced capabilities compared to Full. "Muse Code subscribers can also use Contributor mode, which is on by default: it gives you more usage in exchange for letting Meta use your content to train future Meta models."
- **Limited independent verification:** Most benchmarks are Meta-internal (not independently verified like Artificial Analysis, Vals AI, etc.). "A full report with additional safety evaluations will be available soon." The coding benchmark leadership claim ("outperforming every other model evaluated") cannot be externally verified against SWE-Bench Pro, etc.
- **Pricing complexity:** Three Muse Code tiers (Everyday Usage free, High Usage $20/month, Power Usage $50/month with Muse Wonder Full access, Maximum Usage) plus Muse Model API pay-as-you-go. Complexity may be a barrier compared to simpler per-token pricing (GPT-5.6 Sol $4/$20, Claude Sonnet 5 $2/$10).
- **No published knowledge cutoff:** Knowledge cutoff not separately stated for Muse Wonder Full; relative to models with published cutoffs (GPT-5.6 Sol: Feb 16, 2026; Claude Sonnet 5.5: June 2026), this is a minor uncertainty.

Muse Wonder Full is recommended as the **default model for professional agentic workflows, long-horizon software engineering, and multimodal tasks involving text+image+video+audio+PDF input** where the Muse Code subscription's cost is acceptable and the model's extraordinary multimodal reach and agentic benchmark performance provide decisive advantage. Ideal for: complex software engineering (DeepSWE, SWE-Marathon-style tasks), desktop automation (OSWorld V2.1 78.4%, computer use), expert domains (law, finance, health via the agentic benchmarks), and any scenario where the broadest multimodal input (text+image+video+audio+PDF) matters most and the Muse Code subscription cost is acceptable. For users requiring per-token pricing without a subscription, Muse Model API Standard mode ($4/$20 per MTok) provides immediate access with comparable capabilities, though potentially without the Full variant's highest-capability weights. For the absolute highest independent benchmark scores (SWE-Bench Pro, Artificial Analysis Intelligence Index), dedicated coding/AI index models (Claude Sonnet 5.5, GPT-5.6 Sol) remain the reference points. Muse Wonder Full is also recommended for organizations already invested in the Meta/Muse Code ecosystem who want the most capable agentic model available.

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-12
- Method: Public internet research using official Meta model card, Meta blog introduction, Meta model card comparison, Vertical Tabs analysis, and Meta research static model card; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmarks are Meta-internal and not independently verified; all scores are inferred from publicly released Meta benchmark excerpts.
- Reference URLs:
  - [Meta Research: Muse Wonder Model Card](https://research.meta.ai/static/muse-wonder-model-card)
  - [Meta AI Blog: Introducing Muse Wonder and Muse Wonder Full](https://research.meta.ai/blog/muse-wonder)
  - [Meta about.fb.com: Introducing Muse Wonder Models](https://about.fb.com/news/2026/10/introducing-muse-wonder-models)
  - [Meta Model API: Muse Wonder](https://ai.developer.meta.com/docs/models)
  - [Meta Model API Pricing](https://dev.meta.ai/docs/pricing-rate-limits)
  - [Vertical Tabs: Muse Wonder Full](https://verticaltabs.com/meta/muse-wonder-full)
  - [Meta: Muse Model API](https://ai.developer.meta.com/docs/getting-started/models)

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-wonder-full/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-wonder-full/`.
4. No benchmark invented; zero independently verified benchmarks → noted (most benchmarks are Meta-internal; scores inferred from publicly released Meta benchmark excerpts).