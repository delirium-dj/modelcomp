# GLM-5.3-FlashX-Legal — findings by GPT 6 Astra

- Source: Z.ai / `glm-5.3-flashx-legal`
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX-Legal (GLM-Legal)
- **Short description:** Z.ai's legal-domain adaptation of GLM-5.3-Flash, with legal mid-training and reinforcement-learning post-training. It is a distinct documented Legal API route, rather than a pricing-only FlashX label.
- **Provider / access:** Z.ai Chat Completions API and AutoClaw legal workflows, with specialized MCP integrations for legal research and document editing. [Official model documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash).
- **Release / knowledge:** GLM-Legal launch dated 2026-10-12 by Vals; AutoClaw's introductory article is dated 2026-10-13 and its availability post 2026-10-29. Knowledge cutoff not verified.
- **IDs:** `glm-5.3-flashx-legal`; evaluated by Vals as `zai/glm-legal`, explicitly linked from Z.ai's launch coverage. No Zen Free ID verified.
- **Context window:** **1M tokens / 128K maximum output**, documented on the API-family page and corroborated by Vals.
- **Modalities:** Text, image, video and file input; text output. Thinking, function calling and structured JSON output are documented for the shared API family. No exact-Legal multimodal benchmark was found.
- **Pricing (as of 2026-11-13):** **$0.37 input / $0.075 cached input / $1.25 output per 1M tokens**, current [Z.ai pricing](https://docs.z.ai/guides/overview/pricing). Cache storage is temporarily free; inference is paid. Vals' launch-era $0.075/$0.25 tariff is historical and is not used for current pricing.
- **Architecture:** Derived from the **320B-total / 18B-active** hybrid sparse/linear-attention Flash family. Legal-specific parameter changes and downloadable Legal weights were not verified. Vals labels the model open-weight, while LLM Stats labels it proprietary; no Legal weights repository was established, so license status remains unresolved.

### Raw benchmarks found

Agent / tool use:

- Harvey Legal Agent Benchmark: **19.17%**, Vals' 2026-10-12 evaluation, **#7/79 at that time**, **$0.15 per test**. Z.ai rounds this to **19.2% all-criteria pass rate**. These are the same result, not two independent evaluations. [Vals](https://www.vals.ai/models/zai_glm-legal), [official discussion](https://autoclaw.z.ai/blog/model/GLM-Legal/).
- Legal Research Bench: **41.83% ±3.43**, current Vals display, **#31/94** when fetched. This is legal research, not a general coding/tool benchmark.
- Terminal-Bench 2.1, Tau3-Banking/Tau2-Bench, GDPval-AA, Claw-Eval/ClawProBench and Toolathon/MCP-Atlas/SWE Atlas Codebase QnA: no verified exact-Legal public score found.

Reasoning / knowledge:

- LegalBench: **86.23% ±0.41**, **#15/151**, current [Vals model page](https://www.vals.ai/models/zai_glm-legal). Its launch update says 86.24%; the current display is used and the small revision is not hidden.
- PLawBench: official qualitative parity claim only; no verified numeric score was extracted.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index and Omniscience accuracy/hallucination rate: no verified exact-Legal public score found. Base Flash measurements are not transferred.

Coding:

- SWE-bench Verified/SWE-Pro, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified exact-Legal public score found. The shared documentation's Flash coding results measure the base model, not this post-trained Legal variant.
- Closest proxy: the documented coding-oriented Flash foundation and tool/document-execution support; this is qualitative lineage evidence only, not an exact-model coding measurement.

Long context:

- Verified **1M-token** capacity; no exact-Legal MRCR/RULER/GraphWalks or retrieval percentage found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Independent Harvey LAB 19.17% and legal-research 41.83% demonstrate agent workflows; domain concentration and a low strict all-pass rate cap generalization.
- **Reasoning: 83/100.** LegalBench 86.23% supports substantial domain reasoning, but broad science/knowledge benchmarks were not verified for the Legal variant.
- **Context window: 95/100.** Documented 1M capacity qualifies for the top capacity tier; retrieval quality remains unmeasured here.
- **Multimodal: 80/100.** Shared official specifications include image, video and file input; absent exact-Legal quality measurements and text-only output cap this capability-based rating.
- **Coding: 60/100.** Provisional, low-confidence interpretation of a coding-oriented foundation and executable document workflows; no Legal-specific code benchmark supports a higher rating, and no base-model score is copied.
- **Cost efficiency: 94/100.** Current official $0.37/$1.25 paid pricing is inexpensive; the older discounted Vals tariff is not used and tools may add fees.
- **Overall Score: 80/100.** Half-up mean: (80 + 83 + 95 + 80 + 60) / 5 = 79.6 → 80. Best fit is legal research and document workflows; the general coding dimension is provisional and cost is excluded.

---

## Signature

- Provided by: **GPT 6 Astra (agentrouter/gpt-6-astra)** — 2026-11-13
- Method: Fresh public search, official Z.ai/AutoClaw documentation, live pricing and independent Vals evaluations. Exact Legal results were separated from base Flash figures; unresolved weights/licensing and provisional dimensions are stated. No peer findings were used. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai: Flash/FlashX/Legal API documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
  - [Z.ai: current model pricing](https://docs.z.ai/guides/overview/pricing)
  - [AutoClaw: GLM-Legal launch and Vals attribution](https://autoclaw.z.ai/blog/model/GLM-Legal/)
  - [Vals: GLM Legal independent evaluations](https://www.vals.ai/models/zai_glm-legal)
  - [LLM Stats: exact-model registry and license discrepancy](https://llm-stats.com/models/glm-5.3-flashx-legal)
- Future sources: add a separate signed findings file using the same headings.
