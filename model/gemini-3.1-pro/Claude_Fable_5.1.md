# Gemini 3.1 Pro — findings by Claude Fable 5.1

- Source: Google DeepMind/Gemini 3.1 Pro (`gemini-3.1-pro-preview`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro (API/served as "Gemini 3.1 Pro Preview"; no Free-tier wording — paid model only)
- **Short description:** Google DeepMind's natively multimodal frontier reasoning model, the next iteration of the Gemini 3 series and (per its model card) Google's most advanced model for complex tasks at publication; top use cases are advanced reasoning, agentic coding and long-context multimodal analysis. Variant/alias flag: the only public endpoint is still the _Preview_ alias `gemini-3.1-pro-preview` (no GA ID as of 2026-10-01); all scores below are for this preview build at Thinking (High) unless noted.
- **Provider / access:** Google Gemini API / Google AI Studio and Vertex AI (`gemini-3.1-pro-preview`, Gemini native API, OpenAI-compatible Chat Completions endpoint); OpenRouter `google/gemini-3.1-pro-preview` (Chat Completions, 2 upstream providers); also in Gemini app, Gemini CLI, Antigravity, NotebookLM, Gemini Enterprise. OpenCode Zen listing: not verified in this research pass (search budget exhausted before models.dev/Zen could be checked) — no Zen or Free ID can be confirmed.
- **Release / knowledge:** 2026-02-19 release in preview (Google blog; DeepMind model card updated 19 Feb 2026); knowledge cutoff not stated in the sources retrieved — no verified public cutoff found.
- **IDs:** `google/gemini-3.1-pro-preview` (OpenRouter), `gemini-3.1-pro-preview` (Gemini API / Vertex AI). No Free ID exists; no OpenCode Zen `opencode/<id>` could be verified.
- **Context window:** 1M tokens input (1,048,576 per OpenRouter listing; "up to 1M" per DeepMind model card), 64K/65,536 max output tokens (model card + OpenRouter). Verified via vendor model card and host listing, not by my own test.
- **Modalities:** text, image, audio, video in (DeepMind model card; AA lists text/image/speech/video); PDF/document input via Gemini API (third-party listing — orcarouter); text out only; reasoning yes (thinking levels incl. High and a new Medium level); tool/function calls yes; JSON/structured output yes (standard Gemini API features — not independently re-verified here).
- **Pricing (as of 2026-10-01):** paid — $2.00 in / $12.00 out per 1M tokens for ≤200K-token prompts (Artificial Analysis, OpenRouter, Google Gemini 3.6 Flash model card table); higher tier above 200K context exists but exact figure not verified here; cached-input price not verified in this pass. No free tier; standard Google paid-API data-use terms apply (free AI Studio usage, where offered, may be used for product improvement — unverified for this model).
- **Architecture:** proprietary, closed weights; based on Gemini 3 Pro (model card); parameter count / MoE details not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.84%** (DataLearner leaderboard aggregation, rank 46/57; Terminal-Bench 2.0 Terminus-2 harness: 68.5% per Google model-card table reproduced by Labellerr/SmartScope; Terminal-Bench Hard 54% per Artificial Analysis; Terminal-Bench 4.0 4% per AA Index v4.3.2)
- Tau3-Banking / Tau2-Bench: **no verified public score found** for Tau3-Banking; τ²-Bench Telecom **95.6%** (Artificial Analysis via OpenRouter)
- GDPval-AA: **776** Elo (Artificial Analysis GDPval-AA v2.1, Index v4.3.2 comparison pages; 13.8% win rate per OpenRouter/AA). Launch-era GDPval-AA v1: 1316 Elo / ~40% win rate (AA launch article, Feb 2026)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas **69.2%** (Google launch table as reproduced by stack-junkie/gemini3.us — vendor-reported); Toolathon / SWE Atlas: no verified public score found. Other: AutomationBench-AA **35%**, AA-Briefcase v1.1 **453** (AA v4.3.2); APEX-Agents listed as a win by Google but value not retrieved.
  Reasoning / knowledge:
- GPQA Diamond: **94.3%** (Google DeepMind model card, no tools; Artificial Analysis independent run 94.1%; DataLearner rank 6/253)
- HLE: **44.4%** (Google DeepMind model card, full set text+MM, no tools); **47.0%** (Artificial Analysis independent); 51.4% with search+code tools (DataLearner)
- LCR / MLCR: AA-LCR **82.0%** (Artificial Analysis via OpenRouter); MLCR: no verified public score found
- CritPt: **18%** (Artificial Analysis launch article — highest at the time, >5 pp above next model)
- Artificial Analysis Intelligence Index / BenchLM overall: **30 / not #1** on current Index v4.3.2 (AA model page, Oct 2026; OpenRouter shows 29.7; trails Gemini 3.5 Flash 33 and 3.6 Flash 34); at launch it was **57 / #1** on Index v4.0 (AA article, The Decoder, DeepLearning.AI). BenchLM: no verified public score found
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index **32** (AA v4.3.2); accuracy % / hallucination % split not retrieved — hallucination rate reportedly dropped 38 pp vs Gemini 3 Pro (The Decoder citing AA) but the absolute value is no verified public score found
  Coding:
- SWE-bench Verified / SWE-Pro: **80.6%** single attempt (Google model card table) / **54.2%** SWE-Bench Pro Public (Google model card table; re-confirmed in Google's Gemini 3.6 Flash model card, July 2026)
- LiveCodeBench: **2887 Elo** LiveCodeBench Pro (Google launch table, vendor-reported); **91.7%** LiveCodeBench pass rate with tools, rank 4/125 (DataLearner aggregation)
- SciCode / AA-SciCode: **59%** (Artificial Analysis; 58.7 per DataLearner, rank 13/134)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: DeepSWE v1.1 **12%** (Google Gemini 3.6 Flash model card, July 2026); AA Coding Index **68.8** (OpenRouter/AA current; 56 at launch per Labellerr); AA Agentic Index **8.2**; ARC-AGI-2 **77.1%** (ARC Prize Verified, Google blog); IFBench 77.1% (AA)
  Long context:
- AA-LCR 82.0% (Artificial Analysis long-context reasoning, via OpenRouter). MRCR / RULER / GraphWalks at 512K–1M: no long-context retrieval reported in sources retrieved (Google's MRCR v2 figure could not be fetched before search budget ran out).

### Normalized scores (1-100)

- **Tool use: 68/100.** TB2.1 65.8% (rank 46/57) sits above the 45–60% mid band but well below the ~88% frontier bar; GDPval-AA v2.1 776 Elo and AutomationBench-AA 35% are far from frontier (1750+), Terminal-Bench 4.0 is only 4%, and no Tau3-Banking score exists. Strong older τ²-Telecom (95.6%) and MCP Atlas 69.2% keep it out of the 50s.
- **Reasoning: 86/100.** GPQA 94.3% and HLE 44–47% both clear frontier thresholds, CritPt 18% was best-in-class at launch; capped because the current AA Intelligence Index is 30 (<60) after re-versioning and newer models have passed it.
- **Context window: 96/100.** ≥1M tier (95–100) on a vendor-verified 1,048,576-token window with 64K output; not 100 because no ≥98% retrieval at 512K+ (MRCR/RULER) was verifiable — only AA-LCR 82% was found.
- **Multimodal: 92/100.** Text, image, audio, video and PDF input (audio-in qualifies for the 90–100 band); text-only output keeps it below the top of the band.
- **Coding: 78/100.** SWE-bench Verified 80.6%, LiveCodeBench 2887 Elo / 91.7%, and SciCode 59% (above the 55% frontier bar) are strong; capped by TB2.1 65.8% (frontier ≥85%), SWE-Pro 54.2%, and a weak DeepSWE v1.1 of 12% (frontier 74%+).
- **Cost efficiency: 74/100.** Paid $2.00/$12.00 per 1M (≤200K), between the ~$1.25/$4.25 (~88) and $3/$15 (~60) anchors; not counted in Overall.
- **Overall Score: 84.0/100.** Mean of (68 + 86 + 96 + 92 + 78)/5 = 84.0 — best fit: long-context, multimodal reasoning and single-shot coding where a 1M window and strong GPQA/HLE matter more than long-horizon terminal agent autonomy.

---

## Signature

- Provided by: **Claude Fable 5.1 (anthropic/claude-fable-5.1)** — 2026-10-01
- Method: fresh public internet research (Google DeepMind model cards for Gemini 3.1 Pro and 3.6 Flash, blog.google / Google Cloud blog, Artificial Analysis model page + launch article + comparison pages, OpenRouter listing, DataLearner leaderboard aggregation, and secondary write-ups reproducing Google's launch table); search budget was exhausted before OpenCode Zen/models.dev and MRCR figures could be checked, so those are marked unverified; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
