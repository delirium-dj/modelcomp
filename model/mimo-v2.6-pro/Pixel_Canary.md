# MiMo-V2.6-Pro — findings by Pixel Canary

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`), OpenCode Go catalog `opencode-go/mimo-v2.6-pro`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro (Xiaomi's pro-tier MiMo release; **no OpenCode Zen Free ID** — the free MiMo entries `mimo-v2.5-free` and `mimo-v2.6-flash` are different tiers)
- **Short description:** Xiaomi's September 2026 frontier-class **open-weight** model: a 1M-context, omnimodal (text/image/audio/video in) reasoning model whose headline is extreme price/performance — $0.435/$0.87 per 1M tokens at a top-10 BenchLM rank (#9 of 512), the highest-ranked open-weight family on that board.
- **Provider / access:** Xiaomi MiMo API (`xiaomi/mimo-v2.6-pro`), OpenCode Go (`opencode-go/mimo-v2.6-pro`, identical pricing), Xiaomi Token Plan bundles (CN / AMS / SGP, $0 inside the plan), DeepInfra, Kilo, ZenMux, Vercel, Cline Pass and OpenRouter (`xiaomi/mimo-v2.6-pro`, same $0.435/$0.87) — plus a 10× `mimo-v2.6-pro-ultraspeed` latency variant. OpenAI-compatible API with tool calling and structured output.
- **Release / knowledge:** 2026-09-22 (models.dev `release_date` across all 20+ provider listings); knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2.6-pro`, `opencode-go/mimo-v2.6-pro`, HF `XiaomiMiMo/MiMo-V2.6-Pro-RL`; UltraSpeed variant `xiaomi/mimo-v2.6-pro-ultraspeed`.
- **Context window:** **1,048,576 input / 131,072 max output** — identical across Xiaomi, OpenCode Go, token-plan and OpenRouter listings (models.dev, verified); BenchLM lists 1M.
- **Modalities:** Text, image, audio and video in; text out. Reasoning: yes (BenchLM "Reasoning" type, RL-tuned checkpoint). Tool calling and JSON/structured output supported.
- **Pricing (as of 2026-09-29):** $0.435 / 1M input, $0.87 / 1M output, $0.0036 cache reads; UltraSpeed $4.35 / $8.70 with $0.036 cache reads; $0 inside Xiaomi Token Plan (CN/AMS/SGP).
- **Architecture:** Open weight (BenchLM "Source Type = Open Weight"); RL post-trained checkpoint published on Hugging Face. Xiaomi does not publish the parameter count for the Pro tier.

### Raw benchmarks found

From the BenchLM profile `mimo-v2-6-pro` (last updated 2026-09-28; 30 of 486 benchmarks covered) — composite **74.71/100, rank #9 / 512**.

Agentic / tool use:

- GDPval-AA: **1673 Elo** (58.7% normalized) — top-10 on that board
- Toolathlon-Verified: **76.9%**; AutomationBench **53.1%** (AA AutomationBench 58.6%)
- Terminal-Bench 2.1: **89.9%**; Terminal-Bench 4.0 **34.90%** (AA Terminal-Bench 4.0 34.8%)
- OSWorld-Verified: **82.0%**; CyberGym **94.0%**; ExploitGym 17.8%
- JobBench **62.0%**; AA Briefcase **1517 Elo**; Agents' Last Exam **31.6%**; GDP.pdf 19.2%

Coding:

- DeepSWE: **71.9%**; ProgramBench 26.5%; AA-SciCode **60.9%**
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench: **no verified public score found for this exact ID** (Xiaomi publishes Terminal-Bench and DeepSWE instead)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.3** (Grok 4.6 = 44.3, Qwen3.7 Plus = 25.2)
- AA-HLE: **49.4%**; CritPt: **26.6%** (best of this price band; Grok 4.6 17.1%)
- AA-LCR (long-context reasoning): **86.3%**; MLCR-AA: 18.3%
- AA-Omniscience: Accuracy **34.8%**, Hallucination Rate **40.6%**, Omniscience Index 8.4
- GPQA Diamond / MMLU-Pro / MRCRv2 / RULER: no verified public score found for this exact ID

Multimodal:

- Design Arena (website generation Elo): **1325** (Grok 4.6 1299, Qwen3.7 Plus 1279)
- Audio/video/image understanding is exposed on the API, but BenchLM lists **no** MMMU-Pro, Video-MME, OmniDocBench or audio row for this exact ID
- τ²-bench / τ³-Banking / MCP-Atlas / Claw-Eval / SWE Atlas: no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval-AA 1673 Elo, Toolathlon-Verified 76.9%, Terminal-Bench 2.1 89.9%, OSWorld-Verified 82.0% and CyberGym 94.0% are all top-10-tier values, and JobBench 62.0% / AA Briefcase 1517 show real office-work transfer; capped by the hard tail of the distribution (Agents' Last Exam 31.6%, Terminal-Bench 4.0 34.9%, ExploitGym 17.8%).
- **Reasoning: 68/100.** AA Intelligence Index 46.3, AA-HLE 49.4% and CritPt 26.6% beat every comparably priced model, but the AA-Omniscience pair (34.8% accuracy against a 40.6% hallucination rate) shows it is not trustworthy as an unsupervised open-book oracle.
- **Context window: 84/100.** 1,048,576 input / 131,072 output tokens verified identical across Xiaomi, OpenCode Go and OpenRouter listings, with AA-LCR 86.3% proving usable depth; capped because MLCR-AA is only 18.3% (multi-document aggregation is the weak spot) and no MRCRv2/RULER retrieval-depth curve exists.
- **Multimodal: 72/100.** Genuinely omnimodal on input (text/image/audio/video) — rare at a top-10 rank — plus a leading Design Arena Elo of 1325; capped because no MMMU-Pro / Video-MME / OmniDocBench / audio-quality row is published for this ID and output is text-only.
- **Coding: 82/100.** Terminal-Bench 2.1 89.9% and DeepSWE 71.9% put it above every other open-weight model on the board, AA-SciCode 60.9% is solid; capped because SWE-bench Verified/Pro are unpublished for this ID and ProgramBench 26.5% shows long-horizon program search is still weak.
- **Cost efficiency: 95/100.** $0.435/$0.87 per 1M with $0.0036 cache reads — roughly 1/20th of the Claude Opus 5.5 tier at a top-10 rank — $0 inside the Xiaomi Token Plan, open weights for free self-hosting, and an UltraSpeed tier when latency matters; held below 100 only because this exact ID has no OpenCode Zen Free tier.
- **Overall Score: 78.4/100.** (86 + 68 + 84 + 72 + 82) / 5 = 78.4 — the best price/performance agentic coding model currently on the board; keep it inside a verified tool loop rather than using it as an unsupervised factual oracle.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `mimo-v2-6-pro` refreshed 2026-09-28, incl. the `XiaomiMiMo/MiMo-V2.6-Pro-RL` Hugging Face model card, models.dev provider/pricing index, OpenRouter listing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
