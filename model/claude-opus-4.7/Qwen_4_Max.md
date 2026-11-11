# Claude Opus 4.7 — findings by Qwen 4 Max

- Source: Anthropic/claude-opus-4.7
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7 (API ID `claude-opus-4-7`)
- **Short description:** Anthropic's Opus flagship of **Apr 16, 2026** — a notable upgrade over Opus 4.6 in advanced software engineering (especially the hardest tasks), long-running autonomy, literal instruction-following and self-verification. Two operating modes: **Adaptive reasoning** (the headline/default form; Claude Code defaults to **xhigh**) and a weaker **non-reasoning** mode (thinking disabled). Substantially better vision (images up to **2,576px / ~3.75MP**, 3x prior Claude). Cyber capabilities were deliberately reduced in training and gated by safeguards (first model under Project Glasswing; launched the Cyber Verification Program). Superseded by Opus 4.8 (May 28) and Opus 5/5.5. BenchLM splits the modes: **Adaptive 68.06 #21**, base non-reasoning **64.93 #33** (of 1020).
- **Provider / access:** Claude API (`claude-opus-4-7`), all Claude products, AWS Bedrock, Google Cloud Vertex AI, Microsoft Foundry; OpenRouter. Effort levels low/medium/high/**xhigh** (new)/max; task budgets (public beta), `/ultrareview` command, auto mode (Max). Cyber work requires the Cyber Verification Program.
- **Release / knowledge:** Released 2026-04-16. Knowledge cutoff not restated in the launch post. **Updated tokenizer**: same input maps to ~**1.0–1.35x more tokens**; higher effort thinks more (more output tokens) — measure effective cost on real traffic.
- **IDs:** `claude-opus-4-7`; Adaptive (reasoning) and base (non-reasoning) are modes of the same model, scored separately by BenchLM/AA. Predecessor Opus 4.6; successor Opus 4.8.
- **Context window:** **1M tokens, no long-context premium**, up to **128K output** (Caylent/official). AA-LCR **78.7** (Adaptive); MRCR v2 128K–256K **59.2** (OpenAI comparison table). Better file-system-based memory across multi-session work. Standard 10% cache tier.
- **Modalities:** Text + image input (high-res ~3.75MP), text output. CharXiv **91** (82.1 no-tools), AA-MMMU-Pro **78.8**, XBOW visual-acuity **98.5%** (vs 4.6's 54.5), OfficeQA Pro 43.6, ParseBench 63.34; strong computer-use/diagram/chemical-structure reading.
- **Pricing (as of 2026-11-11):** **$5 in / $25 out** per 1M (unchanged from 4.6); no cheap fast mode yet (introduced with 4.8). Token inflation (1.0–1.35x) + heavier high-effort thinking raise effective cost; task budgets/effort control mitigate.
- **Architecture:** Proprietary; not disclosed. Adaptive reasoning with adjustable effort. System card referenced in the launch post. Alignment: "largely well-aligned and trustworthy, though not fully ideal"; better honesty/prompt-injection resistance than 4.6; Mythos Preview remains best-aligned.

### Raw benchmarks found

Adaptive (reasoning) mode — vendor launch chart + independent (BenchLM Nov 10; AA/ARC Prize/Epoch/Vals/Cognition/OpenAI-table as cited):

- Coding: SWE-bench Verified **87.6**, SWE-bench Pro **64.3**, CursorBench **>70%** (vs 4.6 58%, tester), AA Coding Index **73.6**; TB2.0 **69.4** (Terminus-2, **thinking disabled**); Rakuten-SWE-Bench 3x more production tasks than 4.6; 93-task coding benchmark +13%; autonomous Rust TTS engine
- Agentic: OSWorld-Verified **78**, BrowseComp **79.3**, MCP Atlas **77.3**, τ²-bench **88.6** (AA), GDPval-AA **1396 Elo / 42.6% normalized** (claimed SOTA at launch), CyberGym **73.1** (OpenAI GPT-5.5 table), JobBench 45.9, AA Agentic **39.5**, ITBench 46.7, AA-AnalystAgent 43.8, AA TB2.1 83.1; XBOW visual-acuity 98.5%; Notion +14% at fewer tokens / 1/3 tool errors
- Reasoning/knowledge: GPQA / GPQA-D **94.2** (AA-GPQA-D 91.4), HLE **54.7** tools / **46.9** no-tools (AA-HLE 42.3), AA Intelligence Index **40.7**, ARC-AGI-2 **75.8** (OpenAI table), ARC-AGI-3 **0.2**, CritPt **12.0**, AA-Omniscience net **27.3** (acc 48.9, hallu 42.3), FrontierMath legacy **43.8** (OpenAI table), AA-IFBench 58.6
- Vision: CharXiv **91** / 82.1 no-tools, AA-MMMU-Pro **78.8**, OfficeQA Pro 43.6 (OpenAI table); Harvey BigLaw Bench **90.9%** high effort (tester)

Base non-reasoning mode (thinking disabled; BenchLM 64.93, AA `claude-opus-4-7-non-reasoning`): AA Intelligence Index **30.9**, AA-HLE **33.3**, CritPt **5.1**, ARC-AGI-3 0.2, AA-Omniscience net **14.8** (hallu **54.1%**), AA-GPQA-D 88.5 (Vals 90.2), MMLU-Pro (Vals) 89.9, FrontierMath v2 T1–3 **70.175** / T4 **31.707** (Epoch), τ² 74, TB2.1 (Vals) 68.5, terminalBench-Hard 54.5, SWE-bench (Vals) 82.0, LiveCodeBench (Vals) 85.1, FrontierCode 1.1 **38.5** (Cognition), Vibe Code Bench 71.0, React Native Evals 82.8, PostTrainBench v1.1 28.6, AA-LCR 75.7, AA-MMMU-Pro 76.4, ParseBench 63.34, AA-IFBench 43.6, ApprenticeBench 7, OSWorld 2.0 13.9.

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-V 78, BrowseComp 79.3, MCP Atlas 77.3, τ² 88.6, GDPval-AA 1396 (launch SOTA), CyberGym 73.1, XBOW visual-acuity 98.5 and strong loop-resistance/error-recovery (Notion, Genspark) make it a reliable long-horizon agent; capped by AA Agentic 39.5, GDPval normalized 42.6%, JobBench 45.9 and AnalystAgent 43.8 — below Opus 4.8/5.5.
- **Reasoning: 85/100.** GPQA-D 94.2, HLE 54.7/46.9, ARC-AGI-2 75.8, MMLU-Pro 89.9 and FrontierMath v2 T1–3 70.2 (non-reasoning) are strong; capped by AA-HLE 42.3, AA index 40.7, CritPt 12.0, ARC-AGI-3 **0.2** and 42.3% hallucination. The non-reasoning mode drops sharply (index 30.9, HLE 33.3, Omniscience 14.8).
- **Context window: 92/100.** 1M tokens with **no long-context premium**, 128K output, improved file-system memory and AA-LCR 78.7; capped by MRCR v2 128K–256K 59.2 (moderate multi-hop retrieval) and tokenizer-driven token inflation.
- **Multimodal: 79/100.** High-resolution vision (~3.75MP, 3x prior), CharXiv 91, MMMU-Pro 78.8, XBOW visual-acuity 98.5 and excellent diagram/screenshot reading; capped by OfficeQA Pro 43.6, ParseBench 63.34 and the image-only ceiling (no video/audio).
- **Coding: 87/100.** SWE-bench Verified 87.6, SWE-Pro 64.3, CursorBench >70%, AA Coding 73.6, LiveCodeBench 85.1, Rakuten 3x and autonomous Rust-engine milestones; capped by FrontierCode 1.1 38.5, TB2.0 69.4 (thinking-disabled harness) and PostTrainBench 28.6 — hard open-source-repo work trails its SWE-V strength.
- **Cost efficiency: 50/100.** $5/$25 sticker unchanged, but the new tokenizer inflates input 1.0–1.35x and high/xhigh effort thinks more (more output tokens); no cheap fast mode yet. Task budgets and effort control help, and testers report same-quality-at-lower-cost vs 4.6. Anchored at $5/$25→52, nudged down for token inflation.
- **Overall Score: 85.6/100.** Mean of the five quality dims (85+85+92+79+87)/5 = 85.6. Best-fit: autonomous long-horizon software engineering, computer-use agents and high-resolution document/diagram work where literal instruction-following and self-verification matter; a strong Apr-2026 flagship now superseded by Opus 4.8/5/5.5. Use Adaptive (high/xhigh) effort for full capability — the non-reasoning mode is markedly weaker on knowledge/reasoning.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-11
- Method: public internet research (Anthropic's full launch announcement read in cache, BenchLM's sourced Nov 10 profiles for BOTH the Adaptive-reasoning and base non-reasoning modes, llm-stats/Caylent/Okou rate cards via search snippet, and WebSearch corroboration); scores are normalized 1–100 interpretations, not official vendor scores, weighted to the Adaptive (default/headline) mode. Conflicts labelled, never averaged: BenchLM/AA split **Adaptive reasoning (68.06, AA index 40.7, HLE 54.7/AA 42.3)** vs **base non-reasoning (64.93, AA index 30.9, HLE 33.3, Omniscience 14.8/hallu 54.1)** — different modes, both retained; Terminal-Bench 2.0 69.4 was measured **thinking-disabled** (Terminus-2); HLE vendor 54.7 vs AA 42.3; GDPval-AA 1396/42.6% norm (launch-SOTA claim) vs Opus 4.8's later 1593; CyberGym 73.1, ARC-AGI-2 75.8, MRCR 59.2, OfficeQA Pro 43.6 and FrontierMath legacy 43.8 come from **OpenAI's GPT-5.5 comparison table** (cross-vendor harness); SWE-bench memorization screens noted by Anthropic; SWE-MM uses an internal implementation. AA index versions unstated — not cross-compared. Tokenizer inflates tokens 1.0–1.35x (effective-cost caveat). Identity: Opus 4.7 ≠ 4.6 ≠ 4.8 ≠ Opus 5; Adaptive vs non-reasoning are modes of one model; TB2.0 ≠ TB2.1 ≠ TB4.x; FrontierCode 1.1 ≠ 2.0; FrontierMath legacy ≠ v2.
- Reference URLs:
  - [Introducing Claude Opus 4.7 — Anthropic](https://www.anthropic.com/news/claude-opus-4-7)
  - [Claude Opus 4.7 (Adaptive) benchmark profile — BenchLM](https://benchlm.ai/models/claude-opus-4-7-adaptive)
  - [Claude Opus 4.7 (base) benchmark profile — BenchLM](https://benchlm.ai/models/claude-opus-4-7)
  - [Claude Opus 4.7 — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-7)
  - [Claude Opus 4.7 — Vals AI](https://www.vals.ai/models/anthropic_claude-opus-4-7)
  - [Claude Opus 4.7 Deep Dive: Capabilities, Migration, Economics — Caylent](https://caylent.com/blog/claude-opus-4-7-deep-dive-capabilities-migration-and-the-new-economics-of-long-running-agents)
  - [Introducing GPT-5.5 (peer comparison table) — OpenAI](https://openai.com/index/introducing-gpt-5-5/)
  - [FrontierMath v2 Tier 4 — Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.