# MiniMax M3.1 Flash — findings by MiniMax M3.1 Flash

- Source: MiniMax (MiniMax-M3.1-Flash, GA `20261019`; stealth aliases Space Bunny / Space Bunny Alpha / Space Bunny Free), `minimax/minimax-m3.1-flash`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash (preview checkpoint of the GA `MiniMax-M3.1-Flash`)
- **Short description:** MiniMax's October 2026 multimodal reasoning model for agentic coding and cybersecurity — 1M context, AA Intelligence Index 43 (#4 of 173), DeepSWE 73.7% at $0.15/$0.60 per 1M, and a free zero-retention slot on OpenCode Zen. **Alias note:** it was served anonymously as **Space Bunny** (Zen `space-bunny-free`, 2026-09-23) and **Space Bunny Alpha** (OpenRouter `stealth/space-bunny-alpha`) before the 2026-10-19 reveal; those names were one model's stealth labels, never separate checkpoints. Weights are still unpublished, so the row stays Proprietary.
- **Provider / access:** MiniMax API (`MiniMax-M3.1-Flash`), OpenRouter (`minimax/minimax-m3.1-flash`, plus the free `minimax/minimax-m3.1-flash:free`), OpenCode Zen `opencode/minimax-m3.1-flash-free` (free, zero-retention, no training) and the `minimax-m3.1-flash` paid id; also the M Plan subscription and MiniMax Code.
- **Release / knowledge:** stealth from **2026-09-23**; revealed as MiniMax M3.1 Flash on **2026-10-19** (Zen docs "reveal Space Bunny as MiniMax M3.1 Flash Free"). Knowledge cutoff not published.
- **IDs:** `MiniMax-M3.1-Flash` (MiniMax API), `minimax/minimax-m3.1-flash` / `minimax/minimax-m3.1-flash:free` (OpenRouter), `opencode/minimax-m3.1-flash-free` (Zen, free tier), `minimax-m3.1-flash-free` (Zen id).
- **Context window:** **1,048,576** tokens total, **524,288** max input, **524,288** max output (models.dev opencode entry for the revealed free slot; Zen lists 1,000,000 with 512,000 out).
- **Modalities:** text, image and video input; text output; reasoning with effort levels low/medium/high/xhigh/max and interleaved `reasoning_content`; tool calling.
- **Pricing (as of 2026-10-20):** **$0.15/M input, $0.60/M output, $0.015/M cached** (Artificial Analysis; the Zen route is **free** — $0 in/out/cached, zero-retention, no training).
- **Architecture:** proprietary — MiniMax says weights will be released later.

### Raw benchmarks found

> The model shipped under three stealth names before the reveal, so every tracker row below is the same checkpoint; Artificial Analysis and BenchLM are the two independent sources.

Agent / tool use:

- AutomationBench: **72.52%** (AA, https://artificialanalysis.ai/models/minimax-m3-1-flash) vs **62.2%** (BenchLM — best in its ledger for that benchmark)
- GDPval-AA: **1457.69** (AA) · BankerToolBench: **76.2%** (BenchLM)
- OSWorld 2.0: **61.7%** (BenchLM) · CyberGym: **82.2%** (BenchLM)
- Terminal-Bench 4.0: **25.76%** (AA) vs **38.10%** (BenchLM) · Terminal-Bench 2.1: not published for this model
- Tau2-bench / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **47.96%** (AA) vs **43.4%** without tools (BenchLM)
- Artificial Analysis Intelligence Index: **43**, **#4/173** — "well above average … median 13"
- AA-LCR: **79.67%** (AA) · CritPt: **22.29%** (AA) · Omniscience Accuracy / Hallucination Rate: **56.2% / 92.8%** (AA)
- Output speed: **104.7 tok/s** (AA) with a 4/4-unit cost-per-task rating

Coding:

- DeepSWE: **73.7%** (BenchLM) — at the 74% frontier reference
- SciCode: **53.36%** (AA) · FrontierCode: **38.58%** (AA)
- CyberGym: **82.2%** (BenchLM) · SWE-bench Verified / LiveCodeBench: no verified public score found for this model

Long context:

- LOCA-Bench 256K: **60.3** (BenchLM) · long-horizon whole-repo migration task: **23.0** (BenchLM) · MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 62–73%, GDPval-AA 1458, BankerToolBench 76.2% and OSWorld 2.0 61.7% are strong mid-to-high band agentic numbers, capped by Terminal-Bench 4.0 at 25.8–38.1% and the absence of τ²/MCP-Atlas data.
- **Reasoning: 80/100.** HLE 43–48% and an AA Intelligence Index of 43 (#4 of 173) put it in the high band, with AA-LCR 79.7% and CritPt 22.3% supporting it; the 92.8% hallucination rate is the real cap for unattended use.
- **Context window: 88/100.** A genuine 1,048,576-token window (524,288 max output) earns the ≥1M tier, discounted because LOCA-Bench 256K scores only 60.3 and no MRCR/RULER retrieval measurement exists.
- **Multimodal: 82/100.** Text, image and video input with text output, MMMU-Pro 79.1% (AA), CharXiv 82.5% and BabyVision 91.0% — the video-in band, without audio.
- **Coding: 80/100.** DeepSWE 73.7% sits at the frontier reference, SciCode 53.4% and CyberGym 82.2% are strong, but no SWE-bench Verified or LiveCodeBench number was published and FrontierCode is 38.6%.
- **Cost efficiency: 96/100.** $0.15/M in and $0.60/M out with a $0.015/M cache read is one of the cheapest frontier-adjacent routes on the market; the Zen free slot ($0, zero-retention, no training) would score 100.
- **Overall Score: 82/100.** Mean of the five quality dims = (80 + 80 + 88 + 82 + 80) / 5 = 82.0 → **82**. Best fit: high-capability multimodal agentic and coding work at a fraction of frontier pricing — the strongest value-per-dollar entry in this dataset.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (OpenCode Zen docs and live model endpoint, models.dev commit history and model entries, Artificial Analysis, BenchLM, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.2_Flash.md`, using the same headings.
