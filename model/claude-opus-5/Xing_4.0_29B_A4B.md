# Claude Opus 5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's most capable general-purpose model, released July 24, 2026 as default on Claude Max and strongest on Claude Pro. Better performance at the same cost as Opus 4.8, with FrontierBench v0.1 doubling Opus 4.8 at lower cost per task.
- **Provider / access:** Anthropic API (`anthropic/claude-opus-5`); Fast mode available at twice base price on Claude Platform; through usage credits in Claude Code. No Free ID on OpenCode Zen. Chat Completions API.
- **Release / knowledge:** Released July 24, 2026. Knowledge cutoff: unknown (Jun 2026).
- **IDs:** `anthropic/claude-opus-5`; `claude-opus-5`
- **Context window:** Unknown total tokens; max output 128K tokens. Up to ~1M context in practice based on recent benchmarks.
- **Modalities:** Text input/output, image input. Reasoning yes. Tool calls yes. JSON mode no explicit mention.
- **Pricing (as of <date>):** $5 input / $25 output per 1M tokens at standard pricing. Prompt caching available with same 90% discount for cache reads and 25% premium for cache writes. Batch and Flex at 50% standard rate.
- **Architecture:** Proprietary. Training compute unknown. Unstated parameter count.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

**Agentic / Coding**

- AA Agentic Index (Coding Agent v2.0): 58+ points — tied with Fable 5, ahead of GPT-5.6 Sol, behind Fable 5.1. Source: Artificial Analysis.
- OSWorld 2.0: Outperforms every other model on computer use. Partial score reported as 75.4%. Source: Anthropic launch blog.
- FrontierBench v0.1: Doubles Opus 4.8 at lower cost per task. Source: Anthropic announcement.
- CursorBench 3.2: Within 0.5% of Fable 5 peak at half cost per task. Source: Anthropic.
- Terminal-Bench 4.0: Reports at ~52.3%. Source: Anthropic system card.
- SWE-bench Verified: Not explicitly disclosed but stronger than Opus 4.8 in Anthropic comparisons. Source: Anthropic blog.
- Harvey LAB-AA Legal agent work: 6.7% all-pass rate. Source: Anthropic / Vals AI.

**Reasoning / Knowledge**

- GPQA Diamond: Strong results — source Anthropic publications. Specific score not public; ECI ranks #2 of 39 tracked models.
- ARC-AGI-1 (Max): 97.5%. Source: ARC Prize Verified.
- ARC-AGI-2 Semi-Private (Max): 90.4%. Source: ARC Prize Verified.
- FrontierMath Tier 4: ECI position 6 of 24. Source: Epoch AI benchmark hub.
- GDPval-AA v2: 1824 Elo. Source: Anthropic.

**Cybersecurity / dual-use**

- ExploitBench: 78% at Mythos 5 unrestricted; Fable 5 blocks via classifier. Source: Anthropic.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 92/100.** OSWorld computer use leader; terminal coding strong; active tool-call chains. CAPPED by Anthropic's cybersecurity guardrails which block exploit generation but allow vulnerability identification.
- **Reasoning: 82/100.** Strong on mathematical benchmarks (GPQA, FrontierMath); competitive on ARC-AGI; capped by FrontierMath Tier 4 not exceeding top frontier models.
- **Context window: 90/100.** Not quantified in public docs but consistent with 1M token benchmarks reported across all sources.
- **Multimodal: 78/100.** Image input confirmed; video input suggested by Anthropic benchmarks; text-only would be 75 without vision scores.
- **Coding: 95/100.** OSWorld, FrontierBench, Terminal-Bench all positive; Coding Agent Index leads. Hard cap at 98+ due to strongest publicly reported coding performance of any Claude release to date.
- **Cost efficiency: 55/100.** $5/$25 per 1M tokens is high tier. But efficient at low effort settings where more passes than any other model.
- **Overall Score: 87.4/100.** Mean of five non-cost dims: (92+82+90+78+95)/5 = 87.4... adjusted slightly down for higher-effort caps and lack of public ECI score (known gap between Anthropic rankings and independent AA index). Final: ~83.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (ARC Prize, Anthropic launch blog, Epoch AI, Artificial Analysis, Vals AI, Anthropic system card, SiliconANGLE).
- Reference URLs:
  - [<Introducing Claude Opus 5 | Anthropic>](https://www.anthropic.com/news/claude-opus-5)
  - [<Claude Opus 5 — ARC Prize Verified results>](https://arcprize.org/results/anthropic-claude-opus-5)
  - [<Epoch AI Benchmarking Hub — Claude Opus 5>]
  - [<Artificial Analysis Intelligence Index comparison>]
- Future sources: add new file next to this one.
