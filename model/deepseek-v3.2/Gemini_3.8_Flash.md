# DeepSeek V3.2 — findings by Gemini 3.8 Flash

- Source: opencode/deepseek-v3.2
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's December 2025 open-weight MoE flagship (685B total, 37B active) unifying chat and deep reasoning, with sparse attention for long-context efficiency.
- **Provider / access:** opencode/deepseek-v3.2
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/deepseek-v3.2 (no Free ID on Zen)
- **Context window:** 164,000 total; 8K–128K max output (provider-dependent)
- **Modalities:** Text in/out; hybrid thinking/reasoning, tool calls, structured JSON; no vision/audio
- **Pricing (as of 2026-10-11):** DeepSeek API ~$0.21/$0.31 per 1M (cached input $0.022)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

**Official figures are from the DeepSeek-V3.2 technical report (arXiv 2512.02556), Table 2**, which evaluates the **thinking** variant and benchmarks it against Claude-4.5-Sonnet (High), GPT-5 (Pro), Gemini-3.0 (Thinking), Kimi-K2 (Thinking) and MiniMax-M2 (Thinking). DeepSeek's own claim is that on SWE-bench Verified and Terminal-Bench 2.0 it "significantly outperforms open-source LLMs." Independent figures come from BenchLM and an Artificial Analysis-sourced price/accuracy table.

Text, reasoning and knowledge:

- GPQA Diamond (Pass@1): **82.4%** (Sonnet 83.4, GPT-5 85.7, Gemini-3.0 91.9, Kimi K2 84.5, MiniMax M2 77.7)
- MMLU-Pro (EM): **85.0%** (Sonnet 88.2, GPT-5 87.5, Gemini-3.0 90.1, Kimi K2 84.6, MiniMax M2 82.0)
- HLE text-only (Pass@1): **25.1%** (Sonnet 13.7, GPT-5 26.3, Gemini-3.0 37.7, Kimi K2 23.9, MiniMax M2 12.5)
- **AIME 2025 (Pass@1): 93.1%** (Sonnet 87.0, GPT-5 94.6, Gemini-3.0 95.0, Kimi K2 94.5, MiniMax M2 78.3)
- HMMT Feb 2025: **92.5%** (Sonnet 79.2, GPT-5 88.3, Gemini-3.0 97.5, Kimi K2 89.4)
- HMMT Nov 2025: **90.2%** (Sonnet 81.7, GPT-5 89.2, Gemini-3.0 93.3, Kimi K2 89.2)
- IMOAnswerBench (Pass@1): **78.3%** (GPT-5 76.0, Gemini-3.0 83.3, Kimi K2 78.6)
- BenchLM lanes: Reasoning **53.6** (unranked, 2 rows), Knowledge **41.8 (#91 of 168)**, Instruction Following **56.7 (#75 of 124)**, independent public score **50.19** across 7 covered benchmarks
- **Divergence to flag:** a separate aggregator lists MMLU-Pro **83.7**, GPQA-Diamond **75.1**, LiveCodeBench **59.3** and AIME 2025 **59.0** for this model as of 2026-05-21. The MMLU figure roughly agrees; **GPQA, LiveCodeBench and especially AIME do not** and are most consistent with the **non-thinking** mode or a different harness, not with the paper's thinking column. Treat 59.0 AIME as a different operating point, not a contradiction.

Agent / tool use:

- **τ²-bench (Pass@1): 80.3% thinking / 77.2% non-thinking** — the strongest tool-use number in this report by a wide margin
- **Terminal Bench 2.0 (Acc): 46.4% thinking / 37.1% non-thinking** (Sonnet 42.8, GPT-5 35.2, Gemini-3.0 54.2, Kimi K2 35.7, MiniMax M2 30.0). Note this is TB **2.0**, not the methodology's TB **2.1** anchor, and 2.1 is the harder suite
- MCP-Universe (Success Rate): **45.9% thinking / 38.6% non-thinking**
- MCP-Mark (Pass@1): **38.0% thinking / 26.5% non-thinking**
- Tool-Decathlon: evaluated by DeepSeek; figure not published in the report excerpt available
- **SWE Multilingual (Resolved): 70.2%** (Sonnet 68.0, GPT-5 55.3, Kimi K2 61.1, MiniMax M2 56.5) — beats every comparison model
- Claw-Eval: **40.2%** (BenchLM)
- Gert Labs: **29.57%** (BenchLM)
- VITA-Bench: **18.5%** (BenchLM)
- BenchLM Agentic lane: **Coming soon** (unranked — BenchLM has no agentic composite for this model)
- GDPval-AA / OSWorld / AutomationBench / ClawProBench / BrowseComp / BrowseCompZh / MCP-Universe independent run: no verified public score found

Coding:

- **LiveCodeBench (Pass@1-COT): 83.3%** (Sonnet 64.0, GPT-5 84.5, Gemini-3.0 90.7, Kimi K2 82.6, MiniMax M2 83.0)
- **Codeforces (Rating): 2386** (Sonnet 1480, GPT-5 2537, Gemini-3.0 2708)
- **SWE-bench Verified (Resolved): 73.1% thinking / 72.1% non-thinking** (Sonnet 77.2, GPT-5 74.9, Gemini-3.0 76.2, Kimi K2 71.3, MiniMax M2 69.4)
- SWE-Rebench: **60.9%** (BenchLM); React Native Evals: **71.5%** (BenchLM)
- Aider-Polyglot: evaluated by DeepSeek; figure not published in the excerpt available
- BenchLM Coding lane: **32, ranked #89 of 142** (estimated)
- SciCode / DeepSWE / Vibe Code Bench / SWE-bench Pro / Coding Index: no verified public score found

Long context:

- **No measured retrieval, long-context reasoning or needle benchmark exists for this model** — no MRCR, no LCR, no RULER, no AA-LCR. DSA is explicitly a long-context *efficiency* mechanism and DeepSeek published no accuracy figure for it.

Speed / cost per task:

- No verified tok/s or $/task figure found for any route

### Normalized scores (1–100)

- **Tool use: 68/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 75/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 62/100.** Effective retrieval fidelity across context capacity (164,000 total; 8K–128K max output (provider-dependent)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out; hybrid thinking/reasoning, tool calls, structured JSON; no vision/audio).
- **Coding: 77/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 59.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
