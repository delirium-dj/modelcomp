# Gemini 3.8 Flash — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (fourth Flash-tier release in the Gemini 3 family). Google's own model card says it is **further-trained from Gemini 3.7 Flash** rather than a new base model, so it is a same-family refresh, not an alias of Gemini 3.1 Pro (which sits above it).
- **Short description:** Google DeepMind's September 2026 Flash workhorse, aimed at long-horizon software-engineering agents, terminal-orchestration and document-heavy enterprise/finance work with a 1M multimodal window; it is latency-tolerant by design (multi-second time to first token).
- **Provider / access:** Gemini API, Google AI Studio, Google Vertex AI, Google Antigravity IDE and the consumer Gemini app; tool calls and thinking supported. No OpenCode Zen ID found.
- **Release / knowledge:** Released 2026-09-02 (GA), ~3 weeks after Gemini 3.7 Flash. Knowledge cutoff: no verified public value found.
- **IDs:** `gemini-3.8-flash` (Gemini API). No Free ID exists in this repo's registry, so cost is scored on paid pricing — note that Google AI Studio and the unpaid API quota are free of charge but are not API IDs.
- **Context window:** 1,048,576 (1M) tokens in; 65,536 max output (vendor page, checked 2026-09-04).
- **Modalities:** text, image, video, audio and PDF in; text and tool-calls out; native reasoning (thinking tokens bill as output).
- **Pricing (as of 2026-09-20):** introductory $0.75 in / $3.75 out per 1M through the end of 2026, doubling to the standard $1.50 / $7.50 afterwards; cached input $0.075; Batch and Flex APIs halve standard rates; ≈$1.50/1M blended at 3:1. Google states paid-tier API/Vertex prompts are not used for training, while free AI Studio content may be. Paid API only at the Zen level.
- **Architecture:** proprietary sparse Mixture-of-Experts transformer; parameter count undisclosed; the 3.8 Flash model card defers architecture/training/hardware sections to the 3.7 Flash card.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.8%** (third-party comparison via HokAI — ahead of GPT-5.6 Terra's 87.4% and Claude Sonnet 5's 80.4%) / **89.4%, ranked #1 worldwide** (RankLLMs panel)
- GDPval-AA v2: **1545 Elo** (RankLLMs; frontier reference in this project is 1750+)
- Vals Finance Agent v2: **61.4%** (#1 in the comparison set — Google model page); Harvey Legal Agent: **10.0%** (RankLLMs highlights)
- tau3-bench Banking: **38.1%** vs 30.9% for Gemini 3.7 Flash (DataCamp independent testing, via HokAI)
- OSWorld computer use: **59.0%**; BrowseComp: **86.2%** (RankLLMs panel — the second figure is identical to the CharXiv score below, so treat it as unconfirmed)
- MCP-Atlas / Claw-Eval / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- HLE-Verified: **54.9%** (#1 in the comparison set — Google model page; well above the 40%+ frontier reference in this project's methodology)
- Artificial Analysis Intelligence Index (high reasoning): **59** (cited AA, 2026-09-04)
- LABBench2 biology: **86.2%**; BioMysteryBench (Difficult): **56.5%** (RankLLMs highlights)
- GPQA Diamond: **62.5%** and MATH-500: **62.5%** (RankLLMs radar values — far below the 88.3% GPQA peer median and inconsistent with the HLE-Verified result, so flagged as unconfirmed; no vendor GPQA number was published)
- LCR / MLCR / CritPt / Omniscience accuracy / Hallucination rate: no verified public score found

Coding:

- Terminal-Bench 2.1 **90.8%** (see above) is the strongest coding-adjacent figure found; DeepSWE v1.1: **73.7%** (Google states "above 70%": RankLLMs panel records 73.7% — note its table labels this row "SWE-bench Verified", a source-label conflict, and no SWE-bench Verified score exists)
- SWE-Bench Pro: **61.6%** (up from 60.4% for 3.7 Flash) and SWE-Atlas: **51.9%** (up from 48.0%) — DataCamp independent testing via HokAI
- SciCode / AA-SciCode / Vibe Code Bench / Coding Index: no verified public score found

Multimodal:

- LVBench long video: **87.8% agentic / 87.1% static** (#1 in the comparison set — RankLLMs highlights)
- CharXiv chart reasoning: **86.2%** (up from 84.5% for 3.7 Flash, DataCamp via HokAI; also listed by RankLLMs)
- MMMU / MMMU-Pro / audio benchmarks: no verified public score found

Long context:

- No MRCR, RULER or GraphWalks retrieval result was published at any window length, so retrieval inside the 1M window is unverified; the practical constraints quoted by reviewers are the multi-second time-to-first-token and higher output-token consumption than comparable models.

Composite panels:

- RankLLMs: **56.8/100, #8 of 80** tracked models (175 tps measured); HokAI records 327 tok/s from Artificial Analysis, #5 of 37 peers.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 90.8% clears the 88%+ frontier reference and GDPval-AA 1545 Elo plus #1 finance/legal agent results are strong; held under 90 by OSWorld 59.0%, GDPval-AA still ~200 Elo below the frontier reference, and no MCP-Atlas/Claw-Eval data.
- **Reasoning: 86/100.** HLE-Verified 54.9% and AA Intelligence Index 59 are frontier-class, with LABBench2 86.2% and BioMysteryBench 56.5%; capped by the unconfirmed low GPQA (62.5%), no LCR/CRitPt-class evidence, and the absence of any vendor reasoning table.
- **Context window: 95/100.** A verified 1M input with 65K output is the floor of the ≥1M band; no retrieval measurement exists to justify 98–100, and thinking tokens billed as output make full-window work costly.
- **Multimodal: 91/100.** Text, image, video, audio and PDF input with text output reaches the "+audio in" band, and the #1 LVBench video result (87.8% agentic) plus CharXiv 86.2% justify the top of it.
- **Coding: 88/100.** Terminal-Bench 2.1 #1 at 90.8–89.4% plus DeepSWE 73.7%, SWE-Bench Pro 61.6% and SWE-Atlas 51.9% form the best agentic-coding package found for a Flash-tier model; capped by the missing SWE-bench Verified, SciCode and Vibe Code Bench rows and by SWE-Bench Pro still near 60%.
- **Cost efficiency: 88/100.** $0.75/$3.75 per 1M (introductory, doubling in 2027) with $0.075 cached input, halved Batch/Flex rates and a genuinely free AI Studio tier price this like a mid-tier model at frontier coding quality; docked for the scheduled doubling and higher output-token usage per task.
- **Overall Score: 90/100.** (88 + 86 + 95 + 91 + 88) / 5 = 89.6 → **90**. Best fit: autonomous terminal/coding agents and long finance or legal document workflows where 1M multimodal context and top Terminal-Bench performance outweigh multi-second time-to-first-token.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-20
- Method: fresh public internet research on 2026-09-20 — HokAI vendor-page-checked review (checked 2026-09-04, incl. DataCamp independent testing), RankLLMs verified panel (updated 2026-09-18) and Google's published model-page figures quoted therein; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
