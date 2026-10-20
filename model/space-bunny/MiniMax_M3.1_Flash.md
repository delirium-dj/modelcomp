# Space Bunny — findings by MiniMax M3.1 Flash

- Source: OpenCode (stealth preview), revealed as MiniMax M3.1 Flash Free on 2026-10-19
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny (Free) — revealed as **MiniMax M3.1 Flash Free**
- **Short description:** A free, limited-time stealth reasoning model on OpenCode Zen and OpenCode Go, added 2026-09-23 and **revealed on 2026-10-19 as MiniMax M3.1 Flash Free** (models.dev `base_model = minimax/MiniMax-M3.1-Flash`; opencode commit "docs(console): reveal Space Bunny as MiniMax M3.1 Flash Free" and "Reveal Space Bunny as MiniMax M3.1 Flash Free"). It was one model sold under three names — Space Bunny / Alpha / Free tier — not a separate checkpoint, and the free slot has since been replaced by the explicit `minimax-m3.1-flash-free` id.
- **Provider / access:** OpenCode Zen `space-bunny-free` (now `status: deprecated`) — endpoint `https://opencode.ai/zen/v1/chat/completions` (`@ai-sdk/openai-compatible`); Go endpoint `https://opencode.ai/zen/go/v1/chat/completions`. It is **no longer** in Zen's free-model list (today: Big Pickle, GLM-5.3-Flash Free, DeepSeek V4.1 Flash Free, MiniMax M3.1 Flash Free, Beam Free, LL Alpha Free, LongCat 2.5 Preview Free, Exo Free, MiMo-V2.6/V2.5 Free, Nemotron 3 Ultra / 3.5 Lightning / 3.5 Super VL Free, Jev 1.13 Free). Equivalent id today: `opencode/minimax-m3.1-flash-free`.
- **Release / knowledge:** stealth release **2026-09-23**; revealed **2026-10-19**. Underlying model's knowledge cutoff not published.
- **IDs:** `space-bunny-free` (Zen, deprecated) · `minimax/minimax-m3.1-flash:free` (OpenRouter free route) · `minimax/minimax-m3.1-flash-20261019` (canonical OpenRouter slug) · `opencode/minimax-m3.1-flash-free` (Zen today).
- **Context window:** **1,048,576** tokens total, **524,288** max input, **524,288** max output (models.dev `providers/opencode/models/space-bunny-free.toml`; the MiniMax API lists 1M in / 512K out).
- **Modalities:** text, image and video in; text out; reasoning with effort levels low/medium/high/xhigh/max and interleaved `reasoning_content`.
- **Pricing (as of 2026-10-20):** **free** ($0 input/output/cached) while the stealth preview lasted; the provider followed a **zero-retention, no-training** policy on Zen. The paid route for the same model is **$0.15/M in, $0.60/M out, $0.015/M cached**.
- **Architecture:** proprietary (MiniMax says weights will be released later); the revealed model is multimodal text+image+video.

### Raw benchmarks found

> Space Bunny published nothing under its own name; the numbers below are the revealed model's (MiniMax M3.1 Flash) measurements from Artificial Analysis, BenchLM and OpenRouter.

Agent / tool use:

- AutomationBench: **72.52%** (AA, https://artificialanalysis.ai/models/minimax-m3-1-flash) vs **62.2%** (BenchLM) — best in the BenchLM ledger for that benchmark
- GDPval-AA: **1457.69** (AA) · BankerToolBench: **76.2%** (BenchLM)
- OSWorld 2.0: **61.7%** (BenchLM) · CyberGym: **82.2%** (BenchLM)
- Terminal-Bench 4.0: **25.76%** (AA) vs **38.10%** (BenchLM) · Terminal-Bench 2.1: not published for this model
- Tau2-bench / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- HLE: **47.96%** (AA) vs **43.4%** without tools (BenchLM)
- Artificial Analysis Intelligence Index: **43**, **#4/173** — "well above average … median 13"
- AA-LCR: **79.67%** (AA) · CritPt: **22.29%** (AA) · Omniscience Accuracy / Hallucination Rate: **56.2% / 92.8%** (AA)
- Output speed: **104.7 tok/s** (AA), TTFT ~2s; cost per Intelligence Index task rated 4/4 units

Coding:

- DeepSWE: **73.7%** (BenchLM) — essentially at the 74% frontier reference
- SciCode: **53.36%** (AA) · FrontierCode: **38.58%** (AA)
- CyberGym: **82.2%** (BenchLM) · SWE-bench Verified / LiveCodeBench: no verified public score found for this model

Long context:

- LOCA-Bench 256K: **60.3** (BenchLM) · whole-repo long-horizon migration task: **23.0** (BenchLM) · MRCR / RULER: no verified public score found

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 62–73%, GDPval-AA 1458, BankerToolBench 76.2% and OSWorld 2.0 61.7% are strong mid-to-high band agentic numbers for a free model, capped by Terminal-Bench 4.0 at 25.8–38.1% and the absence of τ²/MCP-Atlas data.
- **Reasoning: 80/100.** HLE 43–48% and an AA Intelligence Index of 43 (#4 of 173) put it in the high band, with AA-LCR 79.7% and CritPt 22.3% supporting it; the 92.8% hallucination rate is the real cap for unattended use.
- **Context window: 88/100.** A genuine 1,048,576-token window (524,288 max output) earns the ≥1M tier, discounted because LOCA-Bench 256K scores only 60.3 and no MRCR/RULER retrieval measurement exists.
- **Multimodal: 82/100.** Text, image and video input with text output and MMMU-Pro 79.1% (AA), CharXiv 82.5% and BabyVision 91.0% — the video-in band, without audio.
- **Coding: 80/100.** DeepSWE 73.7% sits at the frontier reference, SciCode 53.4% and CyberGym 82.2% are strong, but no SWE-bench Verified or LiveCodeBench number was published and FrontierCode is 38.6%.
- **Cost efficiency: 100/100.** The evaluated tier was free ($0 input/output/cached, zero-retention, no training). The paid route for the identical model is $0.15/M in and $0.60/M out, which would still score ≈96.
- **Overall Score: 82/100.** Mean of the five quality dims = (80 + 80 + 88 + 82 + 80) / 5 = 82.0 → **82**. Best fit: free, high-capability multimodal agentic and coding work while the free tier lasts — the strongest free-vs-frontier trade in this dataset.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (OpenCode Zen docs and live model endpoint, models.dev commit history and model entries, Artificial Analysis, BenchLM, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.1_Flash.md`, using the same headings.
