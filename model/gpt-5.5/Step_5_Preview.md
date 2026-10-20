# GPT-5.5 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship model at launch (2026-04-23) for complex professional work — agentic coding, computer use, long-context and knowledge work; a fully retrained refinement of GPT-5.4 with stronger reasoning and token efficiency. Later followed by GPT-5.5 Pro and the GPT-5.6/GPT-6 generations; still a current flagship-tier model on the API.
- **Provider / access:** OpenAI Responses API (`gpt-5.5`, recommended) and Chat Completions; also `openai/gpt-5.5` via OpenRouter, Azure, Amazon Bedrock, Vercel AI Gateway. No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-04-23 (API 2026-04-24); knowledge cutoff 2025-12-01.
- **IDs:** `gpt-5.5` (OpenAI); `openai/gpt-5.5` (OpenRouter route — provider ID only, not a separate model).
- **Context window:** 1,050,000 tokens total (≈922K input / 128K max output per OpenRouter); 128,000 max output tokens. Long-context surcharge: prompts >272K input tokens bill at 2x input / 1.5x output for the full session (standard, batch and flex tiers).
- **Modalities:** Text + image in → text out. `reasoning_effort`: none / low / medium (default) / high / xhigh; function calling, JSON mode, structured outputs, code execution, prompt caching, Batch API; improved image detail preservation (up to 10.24M pixels / 6,000-px dimension at `auto`).
- **Pricing (as of 2026-10-09):** $5.00 / MTok input, $30.00 output (short context); cached input $0.50; >272K context: $10 in / $45 out; Batch and Flex: $2.50 / $15; web search tool $10 per 1K calls.
- **Architecture:** Proprietary.

### Raw benchmarks found

- BenchLM composite (2026-10-19): **69.21/100** overall, #20 of 956 models, 64 of 644 benchmarks covered (partial coverage — conservative)
- Artificial Analysis today (2026-10-19): Intelligence Index **38** (#67/217 — pins the prior 38–39 rebased read), 92.0 tok/s, TTFT 51.79s, $5.00/$30.00 with 90% cache discount (blended $4.35/M; $2.63 per Index task — reconfirmed), 922k context, text+image, 2 providers — DEPRECATED on AA (suggests GPT-5.6 Sol)

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI launch table; field-leading at launch, vs Opus 4.7 69.4%)
- Terminal-Bench 2.1: **78.2%** (LLM Reference); Artificial Analysis (xhigh) 84.3%; Vals AI 76.4%
- Terminal-Bench 4.0: **14.65%** (Artificial Analysis; hard 66-task v4 release)
- Terminal-Bench Hard: **60.6%** (AA, xhigh)
- τ²-Bench Telecom: **98%** (OpenAI launch); AA (xhigh) 93.9%
- GDPval: **84.9** official launch score; GDPval-AA **Elo 1769** (LLM Reference, observed 2026-06-09; AA page revisions list 1396 / 1335.89 on newer index versions)
- OSWorld-Verified: **78.7%** (OpenAI launch; vs Opus 4.7 78.0%); OSWorld 2.0: 13.0% (paper)
- MCP-Atlas: **75.3%** (OpenAI launch)
- Toolathlon: **55.6%** (OpenAI launch)
- BrowseComp: **84.4%**, CyberGym: **81.8%** (OpenAI launch)
- AutomationBench: **12.9%**, ExploitGym: **13.4%** (papers via LLM Reference / BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**
- Cost per task: **$2.63** (Artificial Analysis, xhigh); CursorBench 3.2 reported $0.98 (low) → $2.85 (xhigh) per task
- New independent rows (2026-10-19): APEX-Agents-AA **37.7%**, AA Agentic Index **37.3%**, Gert Labs **72.93%**, AA-AnalystAgent **50.0%**, JobBench **42.7%**, ResearchClawBench **17.0%**, ApprenticeBench **20%**, MazeBench **0%**; GDPval-AA Elo pinned at **1,396** (AA — the file's revision range resolved to the lower figure)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI launch); Vals AI 93.2%; AA 93.5%
- HLE: **52.2%** with tools / **41.4%** without tools (OpenAI launch); AA (xhigh) 45.8%; AA (high) 45.0%
- ARC-AGI-2: **85.0%** (OpenAI launch)
- FrontierMath (Tier 4): **35.4%** (OpenAI launch)
- AA-LCR: **84.3%** (AA, high) — strong long-context reasoning
- MRCR v2 (512K–1M): **74.0%** (OpenAI-published multi-round coreference resolution; independent reproduction consistent; GPT-5.4 36.6% — this was the generation's targeted fix)
- Artificial Analysis Intelligence Index: **55** at launch (xhigh, old scale, tied 1st); **38–39** on the re-based v4.3 (2026-09-07, GPQA out, TB4.0/AutomationBench in)
- CritPt: **25.4%** (AA, high); SciCode **55.8%** (AA); AA-Omniscience accuracy 58.0% with 89.0% hallucination rate (BenchLM/AA)
- MMLU-Pro: **88.1%** (Vals AI)
- New independent rows (2026-10-19): CritPt **27.1%** (AA — above the prior 25.4% read), ARC-AGI-1 **95.00%** (ARC Prize verified), ARC-AGI-3 **0.4%** (near-zero on the newest ARC), Epoch FrontierMath v2 Tiers 1–3 **85.263%** / Tier 4 **72.500%** (exceptional math — far above the launch T4 35.4%), AA-IFBench **75.9%**; MRCR v2 detail: **83.1% @64K–128K**, **87.5% @128K–256K** (OpenAI)

Coding:

- SWE-bench Verified: **88.7%** (OpenAI launch table — self-reported; the independently hosted Vals AI leaderboard lists **82.6%**, 3rd behind Claude Fable 95.0% and Opus 4.8 88.6%; one aggregator explicitly flags the 88.7 figure as unverified)
- SWE-bench Pro (public): **58.6%** (OpenAI; behind Claude Opus 4.7 64.3% and Fable 5 80.3%; OpenAI footnote flags possible memorization)
- LiveCodeBench: **85.3%** (Vals AI)
- Artificial Analysis Coding Index: **74.9%** (AA, xhigh)
- Vibe Code Bench v1.1: **69.85%** (Vals AI)
- CursorBench 3.1: **64.3%** (extra high, Cursor evals); CursorBench 3.2: 58.4% (high/xhigh, $2.05–2.85 per task)
- FrontierCode 1.1 Main: **43.0%** (Cognition)
- Aider Polyglot: **88%** (catalogued as `gpt-5 (high)`); HumanEval 94.2%; React Native Evals 84.7%
- New coding rows (2026-10-19): PostTrainBench v1.1 **27.2%** (weak on the newest agentic suite); **conflict noted — CursorBench 3.1: the file's 64.3% (extra high) vs BenchLM's Cursor-evals row of 59.2%**

Long context:

- 1.05M-token window with >272K long-context pricing tier; **MRCR v2 at 512K–1M: 74.0%** (OpenAI-published) — best published MRCR in this range at launch; AA-LCR 84.3% (high)

### Normalized scores (1–100)

- **Tool use: 89/100.** TB2.0 82.7% (SOTA at launch), TB2.1 78.2–84.3% (AA xhigh), τ²-Bench Telecom 98%/93.9% and GDPval-AA Elo 1769 sit inside the frontier band, with MCP-Atlas 75.3% and OSWorld-Verified 78.7% backing breadth; capped by the hard new suites — Terminal-Bench 4.0 14.65%, AutomationBench 12.9%, Toolathlon 55.6% — and no public Claw-Eval.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 52.2% with tools, AA-LCR 84.3% and ARC-AGI-2 85.0% meet the frontier band, and the AA Intelligence Index was 55 (tied 1st) on the launch scale; capped by CritPt 25.4%, FrontierMath T4 35.4%, and the re-based v4.3 index reading of 38–39 after AA swapped to TB4.0/AutomationBench.
- **Context window: 94/100.** 1.05M tokens (922K in / 128K out) is the ≥1M tier, supported by the field-leading published MRCR v2 74.0% at 512K–1M and AA-LCR 84.3%; the 100 tier requires ≥98% retrieval at 512K+, and the 74% MRCR plus the >272K long-context price surcharge keep it just under the top.
- **Multimodal: 70/100.** Text + image in → text out is the 60–70 band; placed at the band's top on MMMU-Pro (Vals 88.3% / OpenAI launch 81.2% / AA 79.9% — harness spread noted), GDP.pdf 24.9% (no tools) and the improved image-detail handling — but no video/audio input or non-text output.
- **Coding: 88/100.** SWE-bench Verified 88.7% self-reported / 82.6% independent, LiveCodeBench 85.3%, Coding Index 74.9% and CursorBench 3.1 64.3% land in the frontier band; capped by SWE-bench Pro 58.6% (far behind Claude Fable 5's 80.3%), Vibe Code Bench 69.85% and FrontierCode 43.0%.
- **Cost efficiency: 45/100.** $5/$30 per MTok (short context) is mid-tier between the methodology's $3/$15 ≈ 60 and $10/$50 ≈ 30; $0.50 cached input and a measured $2.63/task at xhigh help, but the >272K surcharge (2x input / 1.5x output) and no free tier cap it. Cheaper than the $10/$50 Claude tier, well above free models.
- **Overall Score: 86/100.** Best-fit recommendation: value-pick flagship for agentic coding, computer use and long-context retrieval at roughly half the Claude Mythos-class price; choose Claude Fable 5 instead for the hardest multi-file software engineering.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (deprecated page, suggests GPT-5.6 Sol: Index 38 #67/217 — the prior 38–39 range pinned; 92.0 tok/s; TTFT 51.79s; pricing $5/$30 reconfirmed) and BenchLM (composite 69.21/100, #20/956, 64/644 benchmarks): new rows MRCR v2 83.1%/87.5% (64–128K/128–256K detail), Epoch FrontierMath v2 85.3%/72.5% (exceptional math, far above the launch T4 35.4%), ARC-AGI-1 95.0%, CritPt 27.1%, AA Agentic Index 37.3%, APEX-AA 37.7%, Gert Labs 72.93%, GDPval-AA Elo pinned at 1,396, PostTrainBench 27.2%; two conflicts flagged (CursorBench 3.1 64.3 vs 59.2; MMMU-Pro Vals 88.3 vs launch 81.2/AA 79.9). All consistent with the existing Tool use 89 / Reasoning 91 / Context 94 / Multimodal 70 / Coding 88 reads — no score change warranted. Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (51 primary-source results, updated 2026-10-07 — independent APEX-Agents 55.1%, BrowseComp 77.7%, Vibe Code 69.8%, AutomationBench 2.6–16.6%, SWE-bench/TB rows), confirming the first pass. Prior pass (2026-10-09) used OpenAI model/pricing/launch docs, Artificial Analysis + OpenRouter/AA provider tables, Vals AI, LLM Reference, BenchLM, The AI Rankings, FlowHunt, ArtificialWatch.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
