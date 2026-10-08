# GPT-5.5 — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (OpenAI flagship generation between GPT-5.4 and GPT-5.6). Not an alias of GPT-5.5 Pro — the Pro variant is a separate, differently priced SKU scored lower on the same panel.
- **Short description:** OpenAI's flagship reasoning/coding model of the GPT-5.5 generation, sold on terminal-agent coding (Codex CLI), computer-use automation and knowledge work; premium priced and slow per-token relative to its successors.
- **Provider / access:** OpenAI platform (Responses/Chat Completions per OpenAI conventions) and Codex CLI for terminal-agent work; Cursor/OpenRouter-class gateways not confirmed in the sources found. No OpenCode Zen Free ID.
- **Release / knowledge:** no verified public release date found; RankLLMs tracks it as a current GA entry (panel updated 2026-09-18). Knowledge cutoff: no verified public value found.
- **IDs:** `gpt-5.5`. No Zen Free ID, so cost is scored on paid pricing. The earlier "no vendor model card" finding is now superseded: BenchLM cites an OpenAI launch page ("Introducing GPT-5.5") for most benchmark rows below, so benchmark fields now rest on vendor-sourced evidence even though pricing and architecture remain undocumented.
- **Context window:** **1,000,000 tokens (1M)** per BenchLM (sourced to OpenAI's launch page); RankLLMs had claimed 1.1M. No published max-output figure and no vendor retrieval measurement, so the window is treated as the floor of the ≥1M band.
- **Modalities:** text + image in; text out — now verified by MMMU-Pro **81.2%**, MMMU-Pro with Python **83.2%** and AA-MMMU-Pro **79.9%**. No audio or video capability was reported.
- **Pricing (as of 2026-09-20):** **$7.78 per 1M blended** (RankLLMs — "premium tier, cheaper than only 4% of priced models we track"). Per-direction in/out rates are not published in the sources found, so the figure is an aggregator blended rate rather than a vendor list price. Paid only.
- **Architecture:** proprietary; parameter count, MoE layout and training details not disclosed anywhere in the sources found.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.0%** (Terminal-Bench 2.0 leaderboard); Terminal-Bench 2.1 via Vals: **76.4%** (harness-specific, below the 88%+ frontier reference)
- GDPval-AA: **1396 Elo / 42.7%** (Artificial Analysis, via BenchLM) — mid-upper, against the 1750+ frontier reference; this supersedes the earlier 1769-Elo RankLLMs reading, now treated as an outlier
- τ²-bench: **98%** (OpenAI launch page); OSWorld-Verified: **78.7%**; BrowseComp: **84.4%** (correcting the earlier unconfirmed 78.7% pairing)
- CyberGym: **81.8%**; MCP Atlas: **75.3%**; Toolathlon: **55.6%** (all OpenAI launch page)
- APEX-Agents-AA: **37.7%**; AA ITBench: **45.8%**; AA AnalystAgent: **50.0%**; JobBench: **42.7%**; OSWorld 2.0: **13.0%**; ApprenticeBench: **20%**; AA Agentic Index: **37.3%**; Gert Labs: **72.93%**
- Tau3-Banking / Claw-Eval / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI launch page; AA-GPQA Diamond 93.5%, Vals 93.2%) — this corrects the earlier unconfirmed 56.4% reading decisively
- HLE: **52.2%** with tools / **41.4%** without (OpenAI launch page; AA-HLE 45.8%) — above the 40%+ frontier reference
- AA-LCR: **84.3%**; MRCR v2 64K–128K: **83.1%**; MRCR v2 128K–256K: **87.5%** (OpenAI launch page)
- ARC-AGI-1: **95.0%**; ARC-AGI-2: **85%**; ARC-AGI-3: **0.4%**; CritPt: **27.1%**
- Artificial Analysis Intelligence Index: **38.4%** (BenchLM citing AA) — the clearest figure still below the 60+ frontier reference
- MMLU-Pro (Vals): **88.1%**; AA-Omniscience Accuracy: **58.0%** / Hallucination Rate: **89.0%**; AA-IFBench: **75.9%**
- MLCR / Omniscience Index: no separate verified public score found

Coding:

- SWE-bench (Vals): **82.6%**; SWE-bench Pro: **58.6%** (OpenAI launch page)
- LiveCodeBench (Vals): **85.3%**; Vibe Code Bench: **69.85%**; React Native Evals: **84.7%**
- AA-SciCode: **55.8%** (at the 55%+ frontier reference); AA Coding Index: **74.9%** (above the 70%+ frontier reference)
- CursorBench 3.1: **59.2%**; CursorBench 3.2: **58.4%**; FrontierCode 1.1 Main: **43.0%**; PostTrainBench v1.1: **27.2%**
- DeepSWE / Vibe Code Bench beyond v1.1 / SWE-Atlas: no verified public score found

Multimodal:

- MMMU-Pro: **81.2%**; MMMU-Pro with Python: **83.2%**; AA-MMMU-Pro: **79.9%**; OfficeQA Pro: **54.1%**. Image input with text output is now verified; no audio/video benchmark exists.

Long context:

- MRCR v2 reaches **87.5%** at 128K–256K and AA-LCR is **84.3%**, but no MRCR/RULER figure at 512K–1M exists — retrieval near the full 1M window is unverified.

Composite panels:

- BenchLM: **67.79/100, #24 of 887** tracked models (64 of 623 benchmarks covered). RankLLMs had reported 52.2/100, #27 of 80; the much larger BenchLM cohort and corrected knowledge rows supersede it.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.0 82.0%, OSWorld-Verified 78.7%, CyberGym 81.8%, MCP Atlas 75.3% and τ²-bench 98% are strong, but TB 2.1 via Vals (76.4%) is under the 88%+ frontier reference and GDPval-AA (1396 Elo) is well short of 1750+, so the earlier RankLLMs 1769-Elo basis no longer supports a higher score.
- **Reasoning: 87/100.** GPQA Diamond 93.6% and HLE 52.2% (41.4% without tools) both clear the frontier references, with AA-LCR 84.3%, ARC-AGI-2 85% and ARC-AGI-1 95%; held below 90+ mainly by the AA Intelligence Index at 38.4 (frontier 60+).
- **Context window: 95/100.** The 1M window is now vendor-sourced via BenchLM, the floor of the ≥1M band; no ≥98% retrieval-at-512K measurement exists to justify 100.
- **Multimodal: 70/100.** Image input with text output is verified by MMMU-Pro 81.2% (AA-MMMU-Pro 79.9%); scored at the top of the image-only band because no video/PDF/audio support is documented.
- **Coding: 88/100.** LiveCodeBench 85.3%, SWE-bench (Vals) 82.6%, SWE-bench Pro 58.6%, AA-SciCode 55.8% (frontier 55+) and AA Coding Index 74.9% (frontier 70+) make it a genuine coding agent, short only of the GPT-5.6 siblings.
- **Cost efficiency: 55/100.** A $7.78/1M blended aggregator rate remains above the ~$6/1M blended equivalent of the $3/$15 anchor, and no vendor list price, free tier or Zen ID exists.
- **Overall Score: 85/100.** (85 + 87 + 95 + 70 + 88) / 5 = 85.0 → **85**. Best fit: Codex-CLI-style terminal coding, computer-use automation and knowledge work at GPT-5.5-generation quality; the sub-frontier intelligence index and premium price make it a poor fit for budget-sensitive or high-volume workloads.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-06
- Method: fresh public internet research re-verified 2026-10-06 — BenchLM model record (data 2026-10-07) citing OpenAI's "Introducing GPT-5.5" launch page, Artificial Analysis, Terminal-Bench/Vals, Cursor, Epoch AI and ARC Prize leaderboards. The earlier report's unverified card fields (no vendor page, 1.1M context, 56.4% GPQA) are now corrected by vendor-sourced rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
