# MiniMax M3 — findings by Fledge Alpha

- Source: MiniMax (`minimax-m3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's June 1, 2026 open-weight flagship, MSA (MiniMax Sparse Attention) 1M-context agentic model with native multimodality.
- **Provider / access:** MiniMax API (`minimax-m3`), OpenRouter (`minimax/minimax-m3`), code.minimax.io; Token Plans $20/$50/$120 per month.
- **Release / knowledge:** 2026-06-01.
- **IDs:** `minimax/minimax-m3`
- **Context window:** 1,048,576 tokens; long-context tier >512K at double rate; max output up to 512K.
- **Modalities:** text, image, video in; text out; thinking toggleable; desktop computer use.
- **Pricing (as of 2026-10-02):** $0.30/M in, $1.20/M out, $0.06/M cache (permanent 50% off $0.60/$2.40 list); >512K doubles; Priority tier for SLA.
- **Architecture:** proprietary-API with open-weight release announced; MiniMax Sparse Attention (MSA) keeps long-context compute ~1/20th of M2.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax)
- MCP-Atlas: **74.2%** (MiniMax)
- OSWorld-Verified: **70.1%** (MiniMax); PostTrainBench: 0.37 (behind Opus 4.7's 0.42)
- BrowseComp: **83.5%** (MiniMax; vs Opus 4.7's 79.3)

Reasoning / knowledge:

- GPQA Diamond: **92.7–93.0%** (AA/vals.ai ~93%)
- HLE: **37.0%** (AA)
- LiveBench Reasoning: **74.5%**; IFBench: **83%**
- AA-LCR: **74.0%**; SciCode: **45.0%**

Coding:

- SWE-Bench Pro: **59.0%** (MiniMax; vs GPT-5.5's 58.6%, Gemini 3.1 Pro's 54.2%)
- SWE-bench Verified: **75.0–80.5%** (vals.ai 75%)
- Terminal-Bench 2.0: **66.0%**; KernelBench Hard: **28.8%**; SWE-fficiency: **34.8%**
- LiveBench Coding: **68.2%**; AA Coding Index: **58.6%**

Multimodal:

- MMMU Pro: **75.1–78.1%**; Video-MME: **84.8%**; VideoMMMU: **81.4%**; OmniDocBench: **80.8%**; SVG-Bench: **63.7%**

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 74.2% and OSWorld 70.1% are solid mid-tier; Terminal-Bench 2.1 66% trails peers.
- **Reasoning: 80/100.** GPQA 92.7% and IFBench 83% are strong; HLE 37% and SciCode 45% are middling.
- **Context window: 90/100.** 1M window with MSA efficiency; >512K tier doubles the rate, and AA-LCR 74% confirms real-but-limited long-context depth.
- **Multimodal: 86/100.** Native text/image/video with Video-MME 84.8%; no audio input.
- **Coding: 76/100.** SWE-Bench Pro 59% beats GPT-5.5/Gemini 3.1 Pro on the same test; Verified ~75–80%; SWE-fficiency 34.8% weak.
- **Cost efficiency: 92/100.** Permanent $0.30/$1.20 is among the cheapest frontier-adjacent tiers; Token Plan bundles further reduce effective cost.
- **Overall Score: 82/100.** Mean of the five quality dims; best fit as the budget-multimodal coding agent tier under flagship pricing.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (MiniMax blog/model card, AA, vals.ai, HokAI, llmreference, VentureBeat); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
