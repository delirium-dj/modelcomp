# Claude Fable 5 — findings by GPT 6 Sol

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first generally available Mythos-class reasoning model for demanding coding, research and vision tasks. Mythos 5 shares underlying weights but has different safeguards and restricted access; its unrestricted cyber results must not be attributed to the public Fable endpoint ([Anthropic release](https://www.anthropic.com/news/claude-fable-5-mythos-5)).
- **Provider / access:** Anthropic Messages API `https://api.anthropic.com` (`claude-fable-5`) and [OpenCode Zen Messages](https://pi.dev/models/opencode/claude-fable-5) at `https://opencode.ai/zen` (`opencode/claude-fable-5`). A Chat Completions endpoint and Zen Free ID are not established by these listings.
- **Release / knowledge:** June 9, 2026; January 2026 reliable/training cutoff. Active legacy model after Fable 5.1 ([Anthropic model reference](https://platform.claude.com/docs/en/models/fable-5/overview)).
- **IDs:** `claude-fable-5` (Anthropic), `opencode/claude-fable-5` (Zen). Do not confuse with the differently safeguarded `claude-mythos-5`.
- **Context window:** 1,000,000 total / 128,000 max output ([Anthropic](https://platform.claude.com/docs/en/models/fable-5/overview), [Pi Zen](https://pi.dev/models/opencode/claude-fable-5)). Longer *multi-window* sessions with notes do not increase the native per-request limit.
- **Modalities:** Text/image input, text output, reasoning and tool calls ([Anthropic model reference](https://platform.claude.com/docs/en/models/fable-5/overview)); PDF documents are processed through document/image workflows, not proof of native video/audio or media output.
- **Pricing (as of 2026-10-12):** $10 input / $50 output / $1 cached read / $12.50 five-minute cache write per 1M; batch input/output half-rate ([Anthropic](https://platform.claude.com/docs/en/models/fable-5/overview), [Pi Zen](https://pi.dev/models/opencode/claude-fable-5)). No verified free hosted tier.
- **Architecture:** Proprietary; weights/parameter count undisclosed ([Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5)).

### Raw benchmarks found

Compared [Anthropic's launch and model specs](https://www.anthropic.com/news/claude-fable-5-mythos-5) with independent [Vals](https://www.vals.ai/models/anthropic_claude-fable-5), [Artificial Analysis](https://artificialanalysis.ai/models/claude-fable-5), [ARC Prize](https://arcprize.org/results/anthropic-claude-fable-5) and [Cognition's FrontierCode](https://cognition.com/blog/frontier-code-1.1). [BenchLM's evidence table](https://benchlm.ai/models/claude-fable) links the individual measurements; it is not a further independent experiment. Anthropic/AA and Vals may route classifier-triggering tasks to Opus 4.8: assisted scores measure that *system*, not Fable alone.

Agent / tool use:

- [Anthropic system-card-linked Terminal-Bench 2.1 **84.3%**, GDPval-AA **1747 Elo**, OSWorld-Verified **85%**](https://benchlm.ai/models/claude-fable); independent [Vals TB2.1 **80.52%**](https://www.vals.ai/models/anthropic_claude-fable-5) and harder [TB4.0 **41.41% ±1.34**](https://www.vals.ai/models/anthropic_claude-fable-5). Different harnesses/versions should stay separate.
- [AA τ²-bench **98.5%**, Agentic Index **51.0%**, GDPval normalized **55.5%**](https://benchlm.ai/models/claude-fable); τ² is not τ³-Banking and GDPval normalized percentage is not 1747 Elo. [Vals Index currently **61.39% ±1.00**](https://www.vals.ai/models/anthropic_claude-fable-5) (#8/47 displayed; launch-period cohort/rank differ).
- [Vals Legal Research **49.52%**, Finance Agent v2 **56.31%**, Harvey LAB all-pass **11.25%**, Terminal-Bench Science **15.71%**](https://www.vals.ai/models/anthropic_claude-fable-5). No verified exact-model Claw-Eval or τ³ score located.

Reasoning / knowledge:

- [ARC Prize verified ARC-AGI-2 **89.2%**, ARC-AGI-1 **98.5%**](https://arcprize.org/results/anthropic-claude-fable-5); [AA GPQA Diamond **92.6%**, HLE **55.5%**, CritPt **28.6%**, current Intelligence Index **50**](https://benchlm.ai/models/claude-fable). The AA figure reflects its evolving index, not the project's normalized Overall.
- [Vals GPQA Diamond **93.18%**, MMLU Pro **91.50%**, ProofBench v1.1 **95.00%**](https://www.vals.ai/models/anthropic_claude-fable-5). Provider restrictions and harness choice limit direct comparison with unrestricted Mythos.

Coding:

- [Anthropic card SWE-bench Verified **95%**, SWE-bench Pro **80%**](https://benchlm.ai/models/claude-fable); independent [Vals SWE-bench **95.00%**, LiveCodeBench **89.78%**, Vibe Code Bench **90.35%**](https://www.vals.ai/models/anthropic_claude-fable-5).
- [Cognition FrontierCode 1.1 Main **53.5%**](https://benchlm.ai/models/claude-fable) and independent [Proximal FrontierSWE v2 **47.0%**](https://www.frontierswe.com/) (34 long tasks, five trials each); [AA SciCode **61.0%**](https://benchlm.ai/models/claude-fable). The newer TB4 result at 41.41% highlights remaining difficult-agent failures.

Long context / multimodal:

- [AA-LCR **82.3%**](https://benchlm.ai/models/claude-fable) on long-context reasoning; no exact-model MRCR/RULER score near 1M that establishes ≥98% retrieval found. First-party capacity is not a retrieval guarantee.
- [Vals MMMU Pro **89.31%**](https://www.vals.ai/models/anthropic_claude-fable-5), [Anthropic card OfficeQA Pro **57.9%**](https://benchlm.ai/models/claude-fable): substantial image/document understanding, without native audio/video input.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB2.1 ~80–84%, OSWorld 85% and GDPval 1747 indicate excellent workflows; TB4 41%, fallback exposure and weak legal all-pass cap reliability.
- **Reasoning: 94/100.** ARC-AGI-2 89.2%, GPQA ~93% and HLE 55.5% are frontier-level; CritPt 28.6% prevents a ceiling rating.
- **Context window: 96/100.** Verified 1M capacity and 128K output meet the top capacity tier; no qualifying ≥98% retrieval at 512K+ for 100.
- **Multimodal: 68/100.** Strong vision and PDF/document workflows, but text/image native input and text-only output limit breadth.
- **Coding: 95/100.** SWE Verified 95%, Vibe Code 90.35%, SciCode 61% and FrontierCode 53.5% support high-end coding; newer TB4 and FrontierSWE v2 still leave failures.
- **Cost efficiency: 30/100.** $10/$50 with $1 cache reads is premium, even after batch discount; no paid API rate should be mistaken for a subscription inclusion/free tier.
- **Overall Score: 89/100.** (92 + 94 + 96 + 68 + 95) / 5 = 89.0; suited to difficult text/image research and large engineering jobs when cost and fallback behavior are tracked.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-12
- Method: Fresh Anthropic release/model documentation compared against Vals, AA, ARC Prize and coding benchmarks; scores are normalized interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
