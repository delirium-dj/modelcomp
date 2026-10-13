# MAI-Thinking-1 — findings by MiMo 2.6_Flash

- Source: Microsoft AI (`mai-thinking-1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's first reasoning model, built from scratch on clean enterprise-grade commercially licensed data without third-party distillation. 35B-active / ~1T-total sparse MoE targeting serious math, coding, and enterprise deployment; toe-to-toe with Claude Opus 4.6 on SWE-Bench Pro for its weight class; preferred to Sonnet 4.6 in blind Surge human side-by-sides. First product of Microsoft's "hill-climbing machine" development process.
- **Provider / access:** Microsoft Foundry (private preview June 2, 2026; public preview August 12, 2026); MAI Playground; Azure enterprise deployment with integrated eval/observability/safety.
- **Release / knowledge:** Private preview 2026-06-02; public preview 2026-08-12. Knowledge cutoff not disclosed.
- **IDs:** `MAI-Thinking-1` (Foundry / MAI Playground).
- **Context window:** 256K tokens (~600-page document); function calling; layered developer instructions.
- **Modalities:** text in; text out; reasoning model; function calling. No image/audio/video input disclosed.
- **Pricing (as of 2026-10-13):** Not clearly published in reviewed sources — positioned as "mid-weight price" / cost-efficient reasoning for enterprise; Foundry enterprise billing.
- **Architecture:** 35B active / ~1T total sparse MoE (MAI-Base-1); pretrained from scratch on 8K GB200 GPUs (Azure/Microsoft cluster); mid-training emphasizes STEM/math/coding; STEM + agentic RL climbs (LiveCodeBench v6 hard subset, SWE-bench Verified).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **46.0%**
- Function calling: supported (enterprise agent workflows)
- Blind human preference: preferred to Sonnet 4.6 overall quality (Surge independent raters, single and multi-turn)

Coding:

- SWE-bench Verified: **73.5%**
- SWE-bench Pro: **52.8%** (vendor: toe-to-toe with Claude Opus 4.6)
- LiveCodeBench v6: **87.7%**

Reasoning / knowledge:

- AIME 2025: **97.0%**
- AIME 2026: **94.5%**
- HMMT Feb 2026: **84.9%**
- GPQA / GPQA-Diamond: **84.2%**
- MMLU-Pro: **85%**
- SimpleQA: **31%**
- Graphwalks BFS 128K: **90%** (long-context reasoning)
- LongFact: **98.0%**; AIR-Bench: **88.0%** (llm-stats listing)

Instruction following:

- IFBench: **85%** (public-lane **95.4**, #1/124 on BenchLM)

Long context:

- 256K window; Graphwalks BFS 128K at 90% shows strong long-horizon retrieval/reasoning.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 46% is mid-solid for a 35B-active model; function calling + enterprise agent positioning + strong human-preference for real tasks. Capped by no higher agentic suite figures (no PinchBench/ClawEval-class public numbers).
- **Reasoning: 87/100.** AIME25 97.0 / AIME26 94.5 / HMMT 84.9 are elite for the weight class; GPQA 84.2 and MMLU-Pro 85 confirm broad STEM knowledge. Capped slightly by SimpleQA 31% (factual precision) and no HLE figure.
- **Context window: 84/100.** 256K with Graphwalks BFS 128K at 90% is strong long-context reasoning evidence (not just window size). Capped by no 1M+ tier and no MRCR/RULER.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 80/100.** LCB v6 87.7 + SWE-V 73.5 + SWE-Pro 52.8 (Opus-4.6-class claims) is a top coding profile for mid-weight models. Capped slightly by Terminal-Bench 2.0 46% (terminal agentic coding weaker than pure code-gen).
- **Cost efficiency: 78/100.** 35B-active footprint = small inference cost; "mid-weight price" enterprise positioning; no public list price found so value is inferred from active-param count and Foundry packaging. Capped by proprietary/closed weights and opaque pricing.
- **Overall Score: 68/100.** Mean of (72 + 87 + 84 + 15 + 80) / 5 = 67.6 → **68**. Best-fit recommendation: strongest pure-reasoning / STEM-coding pick in the Microsoft MAI line for enterprise Foundry deployments that need AIME/GPQA-class math-science and Opus-4.6-competitive SWE work without frontier-token pricing; prefer MAI-Code-1.1-Flash for cheaper pure-coding workloads.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (microsoft.ai news/model pages, MAI-Thinking-1 technical report PDF, benchlm.ai / llm-stats / LLM Reference listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
