# DeepSeek V3.2 — findings by MiniMax M3.1 Flash

- Source: DeepSeek (DeepSeek-V3.2), `deepseek-ai/DeepSeek-V3.2`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 MIT-licensed MoE — 685B total / 37B active with DeepSeek Sparse Attention, the first DeepSeek model to think *inside* tool use, SWE-bench Verified 73.1% and IMO/IOI gold-medal results, at $0.28/$0.42 per 1M. The folder's "Dec 2024" date and "IMO/IOI gold-medalist" framing for the base model are corrected below.
- **Provider / access:** DeepSeek API (`deepseek-chat` = non-thinking, `deepseek-reasoner` = thinking, both on V3.2), Hugging Face `deepseek-ai/DeepSeek-V3.2` (MIT), OpenRouter `deepseek/deepseek-v3.2` ($0.28/$0.42). **Not on OpenCode Zen.**
- **Release / knowledge:** **2025-12-01** (DeepSeek news, API updates, AA, BenchLM). The preview checkpoint **V3.2-Exp** shipped 2025-09-29; the "0925" checkpoint the folder implies **does not exist** (no such repo in the DeepSeek org). The **2024-12-26** date belongs to DeepSeek-V3, not V3.2.
- **IDs:** `deepseek-ai/DeepSeek-V3.2` (HF), `deepseek/deepseek-v3.2` (OpenRouter), `deepseek-ai/DeepSeek-V3.2-Exp` and `-Speciale` (siblings; the Speciale API endpoint expired 2025-12-15).
- **Context window:** **128K** first-party ("DeepSeek-V3.2 supports a maximum context length of only 128K") vs **163,840** on OpenRouter — conflict flagged. Max output: no first-party figure; OpenRouter lists 65,536 (V3.2) / 147,456 (Exp).
- **Modalities:** text in / text out only; thinking and non-thinking routes; tool use inside the thinking loop.
- **Pricing (as of 2026-10-20):** **$0.28/M in, $0.42/M out, $0.028/M cached** at release (AA, BenchLM, OpenRouter). DeepSeek's current pricing page lists only the V4/V4.1 family, so this is the last published rate.
- **Architecture:** MoE, **685B total / 37B active** (HF safetensors and AA) — DeepSeek's own inference config is named `config_671B_v3.2.json`, so the 671B figure also circulates; DeepSeek Sparse Attention (fine-grained sparse attention + light indexer), first shipped in V3.2-Exp.

### Raw benchmarks found

> DeepSeek's V3.2 technical report (Table 2/3) against Artificial Analysis's non-reasoning run and BenchLM's composite.

Coding:

- SWE-bench Verified: **73.1%** (tech report, "primary score obtained using our internal framework"; 72–74% across Claude Code / RooCode / non-thinking scaffolds) — HF eval row lists 70*
- LiveCodeBench (Pass@1-CoT): **83.3%** · Codeforces rating: **2386** (V3.2-Exp 2121; V3.2-Speciale 2701 — the folder's "Codeforces 2130+" is not supported)
- SWE-bench Multilingual: **70.2%** · DeepSWE / SciCode: no verified public score found

Agent / tool use:

- Terminal-Bench 2.0: **46.4%** (Claude Code framework) / **39.3** with Terminus in non-thinking mode
- Tau2-bench: **80.3%** (Airline 63.8, Retail 81.1, Telecom 96.2) · MCP-Universe **45.9%** · MCP-Mark **38.0%** · Tool-Decathlon **35.2%**
- BrowseComp: **51.4%** (67.6% with context management) / BrowseCompZh **65.0%** — 20%+ of cases exceed the 128K limit

Reasoning / knowledge:

- GPQA Diamond: **82.4%** (tech report and HF eval row) / **75.05%** (AA) · HLE: **25.1%** text-only / **40.8%** with search tools / **11.21%** (AA) · MMLU-Pro: **85.0%**
- AIME 2025: **93.1%** (V3.2-Speciale 96.0) — **AIME 2024 is not reported** · HMMT Feb 2025 / Nov 2025: **92.5% / 90.2%** · IMOAnswerBench: **78.3%** (Speciale 84.5)
- Artificial Analysis Intelligence Index: **16 (estimated)**, #16/46 in class · AA-LCR **45.67%** · IFBench **49.05%** · CritPt **0.86%** · Omniscience Accuracy / Hallucination Rate: **24.0% / 93.3%** · output speed (non-reasoning) — AA index row
- AA non-reasoning: LiveCodeBench **59.26%**, AIME 2025 **59.0%**, Tau2 **78.95%**

Long context:

- BrowseComp: 20%+ of cases exceed the 128K window; no MRCR / RULER figure published for V3.2.

### Normalized scores (1–100)

- **Tool use: 55/100.** τ²-bench 78.9–80.3%, MCP-Universe 45.9%, Tool-Decathlon 35.2% and Terminal-Bench 2.0 46.4% are mid, with no GDPval-AA and no second-generation agentic suite.
- **Reasoning: 64/100.** GPQA 75.1–82.4%, MMLU-Pro 85.0%, AIME 2025 93.1% and HMMT 92.5% are solid mid-band, capped by HLE 11.2–25.1%, LCR 45.7%, CritPt 0.86% and a 93.3% hallucination rate.
- **Context window: 64/100.** 128K first-party (160K on some hosts) is the 100K–200K tier, and BrowseComp notes a fifth of cases exceed the window.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 76/100.** SWE-bench Verified 73.1%, LiveCodeBench 83.3% and Codeforces 2386 are high-end mid-band numbers, capped by the 70% HF eval row and the missing DeepSWE row.
- **Cost efficiency: 94/100.** $0.28/M in and $0.42/M out with a $0.028/M cache read is very cheap for a 685B model, and MIT weights are free to self-host.
- **Overall Score: 55/100.** Mean of the five quality dims = (55 + 64 + 64 + 15 + 76) / 5 = 54.8 → **55**. Best fit: cheap open-weight coding and reasoning, especially the tool-use-inside-thinking mode — superseded by the V4 family on context length.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (DeepSeek V3.2 model card and technical report PDF, DeepSeek API news/updates, Artificial Analysis, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Flash.md`, using the same headings.
