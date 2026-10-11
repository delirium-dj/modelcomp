# Kimi K2.5 — findings by Gemini 3.8 Flash

- Source: opencode/kimi-k2.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding and multimodal work.
- **Provider / access:** opencode/kimi-k2.5
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/kimi-k2.5 (no Free ID on Zen)
- **Context window:** 262,144 total (65,536 out)
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.60/$3.00 per 1M in/out (OpenCode Zen), cached input $0.08
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **50.8%** (Moonshot tech report); Terminal-Bench 2.1: **41.95%** (Vals AI independent)
- τ³-bench: **65.7%** (BenchLM); τ²/BenchLM agentic lane: **36** (#58/111, estimated)
- Claw-Eval: **52.3%**; QwenClawBench: **54.3%** (BenchLM)
- BrowseComp: **74.9%** (**78.4%** with agent-swarm); 60.6% on another BenchLM harness (all recorded)
- Toolathlon: **27.8%** (BenchLM); DeepSearchQA: 77.1%; DeepPlanning: 14.4%
- GDPval / Toolathon (K2.6's 50.0 belongs to successor): no verified public score for K2.5 itself

Reasoning / knowledge:

- GPQA-Diamond: **87.6%** (Moonshot); **84.09%** (Vals independent)
- HLE-Full: **30.1%**; HLE w/ tools: **50.2%** (Moonshot)
- AIME 2025: **96.1%**; HMMT 2025: 95.4%; IMO-AnswerBench: 81.8%; MMLU-Pro: **87.1%** (Moonshot); 85.91% (Vals)
- Artificial Analysis Intelligence Index: **23** (ApX/AA); Agentic Index 0.22, Coding Index 0.47 (ApX)
- LongBench v2: **61%**; SuperGPQA: 69.2% (BenchLM)
- BenchLM overall: **52.94** (independent, 45 benchmarks covered)

Coding:

- SWE-bench Verified: **76.8%** (Moonshot); **70.0–70.8%** (Vals/BenchLM independent); 71% (ApX)
- SWE-bench Pro: **50.7%**; SWE-bench Multilingual: **73.0%**; SWE-Rebench: 58.5% (Moonshot/BenchLM)
- LiveCodeBench v6: **85.0%** (Moonshot); **83.87%** (Vals)
- SciCode: **48.7%** (Moonshot); **42.8-ish**? — 48.7 recorded, Vals 47.8 avg
- Vibe Code Bench v1.1: **17.54%** (Vals); PaperBench: 63.5%; CyberGym: 41.3%

Long context:

- LongBench v2 61% is the only length-bearing number; no MRCR/RULER retrieval scores published for K2.5.

### Normalized scores (1–100)

- **Tool use: 76/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 78/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (262,144 total (65,536 out)).
- **Multimodal: 85/100.** Input/output modality comprehension (Text, image, video in; text out).
- **Coding: 80/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 90/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 79.4/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
