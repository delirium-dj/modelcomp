# GLM-5.3-FlashX — findings by Grok 4.6

- Source: Z.AI (`glm-5.3-flashx`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-FlashX
- **Short description:** Z.AI's high-speed serving SKU of GLM-5.3-Flash (same native-multimodal Flash family, up to ~200 tok/s). FlashX is a latency/price variant, not a separately benchmarked checkpoint in Z.AI's published table.
- **Provider / access:** Z.AI Chat Completions API `glm-5.3-flashx` (same docs page as `glm-5.3-flash`). Also Alibaba Cloud Model Studio `ZHIPU/GLM-5.3-FlashX`. Thinking cannot be disabled (`thinking.type` = enabled only).
- **Release / knowledge:** Flash family public 2026-08-26 (Z.AI blog); FlashX called live on the current Flash/FlashX docs. Knowledge cutoff not stated on the docs page.
- **IDs:** `glm-5.3-flashx` (Z.AI); OpenRouter-style `z-ai/glm-5.3-flashx`. Not on the GLM Coding Plan (docs: FlashX is not yet on the plan). No Zen Free ID found.
- **Context window:** 1M tokens; 128K max output (Z.AI docs). Alibaba Model Studio lists 1,048,576 context and 131,072 max output.
- **Modalities:** Video / image / text / file in; text out; function calling, structured output, context caching. No audio I/O on the card.
- **Pricing (as of 2026-10-20):** Z.AI USD $0.37 input / $0.075 cached input / $1.25 output per 1M; cache storage limited-time free. Flash itself is cheaper at $0.15/$0.50 — FlashX is the speed lane. Alibaba Beijing list is CNY ¥2 / ¥7 (plus cache), not used for USD scoring.
- **Architecture:** Same Flash hybrid sparse+linear attention MoE: 320B total / 18B activated, 45 layers (Z.AI Flash blog). Open-weight Flash checkpoint is on Hugging Face; FlashX is the hosted fast endpoint.

### Raw benchmarks found

Z.AI's published table is labeled **GLM-5.3-Flash**, not a separate FlashX run. Docs treat Flash/FlashX as one model with two API codes. Figures below are Flash-family vendor numbers unless marked independent.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI blog; Claude Code 2.1.207 harness). Independent AA TB 2.1 listing for "GLM 5.3 Flash" also **84.3%** (ModelCap snapshot 2026-10-15)
- Toolathlon Verified: **78.4** pass@1 mean of 3 (Z.AI)
- AutomationBench v1.0.6: **48.8** (Z.AI)
- GDPval-AA v2: **1773** Elo (Z.AI, "evaluated by Artificial Analysis")
- Agents' Last Exam: **26.3** (Z.AI)
- OSWorld 2.0: **59.1** (Z.AI vision/agent table)
- Tau3-Banking / Claw-Eval / MCP-Atlas: **no verified public score found** for Flash/FlashX

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **57** (Z.AI blog, Flash; $0.045/task at discounted Flash price)
- HLE w/ tools: **55.3%** (Z.AI)
- GPQA Diamond: **no verified public score found** on the Flash table (do not borrow GLM-5.2's 91.2%)
- CharXiv Reasoning w/ tools: **89.4** (Z.AI)
- OfficeQA Pro: **62.4** (Z.AI)
- CritPt / LCR / Omniscience: **no verified public score found**

Coding:

- DeepSWE v1.1: **63.4** (Z.AI; mini-swe-agent, 400K context)
- NL2Repo: **56.3** (Z.AI)
- Z.ai Code Bench v1.0 (in-house, Claude Code): **29.0** at max effort vs Opus 4.8 29.5 (Z.AI)
- SWE-bench Verified / LiveCodeBench / SciCode: **no verified public score found** for this ID (sota-model.com SWE 70.9% / GPQA 84.3% are aggregator rows, not used)

Long context:

- 1M advertised. **no verified public MRCR / RULER / GraphWalks score found**

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1773 is at/above the ~1750 frontier ref, TB 2.1 84.3% is near the 88% band, Toolathlon 78.4 is strong. Capped by AutomationBench 48.8, OSWorld 2.0 59.1, missing Tau3, and FlashX having no separate agent run.
- **Reasoning: 90/100.** Index 57 is just under the 60+ frontier band; HLE-with-tools 55.3% is above the 40% HLE frontier line. Capped by no Flash GPQA and Index still short of 60.
- **Context window: 96/100.** Documented 1M / 128K–131K out is the ≥1M tier. Not 100: no ≥98% retrieval at 512K+.
- **Multimodal: 85/100.** Native video+image+file in maps to the 75–90 band. Capped by text-only output and no audio.
- **Coding: 86/100.** TB 2.1 84.3% is near the 85% coding frontier; DeepSWE 63.4 is below 74%. Capped by missing SWE-Verified and the Flash-not-FlashX label on the table.
- **Cost efficiency: 93/100.** FlashX $0.37/$1.25 sits between ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92), closer to the latter. Flash's $0.15/$0.50 is cheaper — this score is the X lane only.
- **Overall Score: 90/100.** Mean of 91 + 90 + 96 + 85 + 86 = 89.6 → 90 half-up. Best fit: paid low-latency multimodal agents when Flash's cheaper lane is too slow; use Flash numbers as family evidence, not a unique X eval.

---

## Signature

- Provided by: **Grok 4.6 (xAI / grok-4.6)** — 2026-10-20
- Method: public internet research (Z.AI Flash/FlashX docs, Z.AI pricing, GLM-5.3-Flash blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
