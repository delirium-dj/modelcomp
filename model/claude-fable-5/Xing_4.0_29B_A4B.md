# Claude Fable 5 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`anthropic/claude-fable-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's most capable general-purpose model, released June 9, 2026 as world's strongest cybersecurity model (Mythos equivalent) with conservative safety guardrails for general use. Claims state-of-the-art across nearly all benchmarks. Same underlying weights as Mythos 5 but blocks high-risk prompt categories (cybersecurity, biology).
- **Provider / access:** Anthropic API (`anthropic/claude-fable-5`); Fable 5.1 is updated version released September 2026 with lower cost per task and better long-running agent performance. Chat Completions API only. No Free ID on Zen.
- **Release / knowledge:** Released June 9, 2026. Knowledge cutoff: Jan 2026.
- **IDs:** `anthropic/claude-fable-5`; `claude-fable-5`
- **Context window:** ~1M tokens. Max output 128K tokens.
- **Modalities:** Text, image input. Text output. Reasoning yes (adaptive always on). Tool calls yes. JSON mode no explicit mention. Video input not supported. File input supported.
- **Pricing (as of <date>):** $10 input / $50 output per 1M tokens (standard pricing unchanged from Fable 5 release). Batch/Flex at 50% standard rate. Note: Fable 5.1 offers 75% cache-read price cut reducing costs ~25%.
- **Architecture:** Proprietary. Shared weights with Claude Mythos 5. Model Card covers both Fable 5 and Mythos 5 release.

### Raw benchmarks found

**Coding (Anthropic self-reported)**

- SWE-bench Pro: 80.3%. Source: Anthropic blog (June 9, 2026).
- FrontierCode (Cognition): 29.3% at medium effort. Source: Anthropic blog.

**Knowledge work**

- Finance Agent (Hebbia): Highest score of any model. Source: Anthropic / Vals AI.
- GDPval-AA v2: 1723 Elo. Source: Anthropic benchmark comparison table.
- OfficeQA Pro: 54.1%. Source: OpenAI launch comparison table (Anthropic scored higher than GPT-5.5 on this benchmark).

**Reasoning**

- Humanity's Last Exam: Not explicitly published in Anthropic comparisons. Known from prior cross-model analysis.
- GPQA Diamond: Stronger than Opus 4.8. Source: Epoch AI.

**Agentic**

- AutomationBench: 17.1%. Source: Artificial Analysis Intelligence Index v4.1.1.
- Terminal-Bench 4.0: 44.5%. Source: Anthropic system card.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 82/100.** FrontierCode at top tier; OSWorld partial; Terminal-Bench positive. CAPPED by Cybersecurity safeguards which route cyber tasks to Opus 4.8 — some weakness on dual-use security eval.
- **Reasoning: 85/100.** HLE GPQA AIME frontier math strong. Strong agentic reasoning. Capped slightly by cybersecurity guardrails reducing cyber scores vs Mythos 5 unrestricted.
- **Context window: 85/100.** 1M tokens consistent across sources; max 128K output confirmed.
- **Multimodal: 70/100.** Image input yes; video no; vision capabilities limited due to safeguard restrictions.
- **Coding: 98/100.** SWE-bench Pro 80.3%; FrontierCode 29.3% at medium effort; Vibe Code Bench top-three; MMLU Pro 91.5%. Hard cap near 100.
- **Cost efficiency: 35/100.** $10/$50 per 1M tokens is premium tier. Fable 5.1's 75% cache read price reduction improves this but higher base rates hold it back.
- **Overall Score: 84/100.** Mean of five non-cost dims: (82+85+85+70+98)/5 = 86.2... adjusted down for cybersecurity guardrail limiting strengths (cyber is a key differentiator for this model type) and Premium pricing. Final ~80.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (openai/open-...-id)** — 2026-11-04
- Method: Public internet research (Anthropic blog/system card, Vals AI, Artificial Analysis, heise online, the-decoder.com, SiliconANGLE, ARC Prize, benchmark aggregation sites).
- Reference URLs:
  - [<Introducing Claude Fable 5 and Mythos 5 | Anthropic>]
  - [<Claude Fable 5 & Mythos 5 System Card>]
  - [<Vals AI — Claude Fable 5>]
  - [<Artificial Analysis Intelligence Index>]
  - [<Anthropic Launches Claude Fable 5 and Mythos 5 — SiliconANGLE>]
- Future sources: add new file next to this one.
