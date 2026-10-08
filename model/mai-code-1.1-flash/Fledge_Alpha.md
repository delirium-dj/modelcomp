# MAI-Code-1.1-Flash — findings by Fledge Alpha

- Source: Microsoft AI (`MAI-Code-1.1-Flash`, via GitHub Copilot)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft's in-house small-tier agentic coding model — GitHub Copilot's low-cost, high-volume workhorse. Successor to MAI-Code-1-Flash (June 2026): quarter of the cost, 25% fewer/faster tokens, and new native vision input.
- **Provider / access:** GitHub Copilot (in production across Copilot CLI and VS Code); billed at provider list pricing under Copilot usage-based billing. Not a general public API model.
- **Release / knowledge:** 2026-08-11 (Microsoft AI blog, github.com/microsoft/MAI-Code).
- **IDs:** `microsoft/mai-code-1.1-flash` (no Free ID on Zen found; access via Copilot subscription)
- **Context window:** 256,000 tokens; max output 128,000 (HokAI).
- **Modalities:** text + image in (new in 1.1 — reads UI mockups, diagrams, error screenshots); text out; agentic tool use via Copilot harness; prompt caching.
- **Pricing (as of 2026-10-08):** $0.20 input / $1.20 output per 1M via GitHub Copilot (llm-stats); blended ~$0.45 (HokAI, cheaper than 79% of 74 GA peers). A quarter of MAI-Code-1-Flash's price.
- **Architecture:** sparse MoE, 137–138B total / 5B active per token (Microsoft blog, HokAI); proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (GitHub Copilot CLI): **62.9%**, avg 17.0K tokens (Microsoft via HokAI; +22% over predecessor)
- .NET tasks: +15% improvement over 1.0 (Microsoft)

Reasoning / knowledge:

- LLM Stats Score: **27.8** (#140); Reasoning index 27.6 (#137) (llm-stats, 2 evals)
- GPQA / HLE: no verified public score found (coding-specialized model)

Coding:

- SWE-bench Verified: **72.6%**, avg 8.6K tokens per solved task (Microsoft via HokAI; #21/31 GA models)
- SWE-bench Pro: predecessor 1.0 scored 51.2% vs Claude Haiku 4.5's 35.2%; 1.1 extends the lead (Microsoft via HokAI)
- Production metrics: code survival +4%, return visits +9% (Microsoft)

Long context:

- 256K window (HokAI); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 74/100.** Terminal-Bench 2.1 62.9% inside its native Copilot CLI harness with strong production retention metrics; capped by harness-specific tuning and no third-party agentic suite rows.
- **Reasoning: 62/100.** LLM Stats reasoning 27.6 — deliberate-reasoning tasks are explicitly delegated to sibling MAI-Thinking-1.
- **Context window: 62/100.** 256K window holds a mid-size repo; mid-tier by late-2026 standards.
- **Multimodal: 45/100.** New native image input (screenshots, mockups) is genuinely useful for coding, but text-only output and no audio/video/PDF depth.
- **Coding: 78/100.** SWE-bench Verified 72.6% at 8.6K tokens/solve is efficient and production-proven in Copilot; capped below elite coding models (SWE-bench Pro ~51% class).
- **Cost efficiency: 84/100.** $0.20/$1.20 with 25% fewer tokens per task — among the cheapest capable coding models, though gated behind Copilot billing.
- **Overall Score: 64/100.** Mean of (74, 62, 62, 45, 78) = 64.2 → 64. Best fit: high-volume iterative agentic coding inside GitHub Copilot CLI / VS Code, especially CLI and .NET work.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (Microsoft AI blog, github.com/microsoft/MAI-Code, HokAI, llm-stats, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
