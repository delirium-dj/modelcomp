# Mercury Edit 2 — findings by MiniMax M3.1 Flash

- Source: Inception (`mercury-edit-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury Edit 2
- **Short description:** Inception Labs' purpose-built diffusion LLM (dLLM) for **next-edit prediction and fill-in-the-middle code completion**. It predicts a developer's next code change from recent snippets, the current file and edit history; it is aligned to human accept/reject preferences with KTO. This is an editor-side code-editing component, not a general chat or agent model.
- **Provider / access:** Inception API only, through `POST https://api.inceptionlabs.ai/v1/fim/completions` for inline autocomplete and `POST https://api.inceptionlabs.ai/v1/edit/completions` for next-edit prediction. The documented model id is `mercury-edit-2`. There is no chat endpoint and no OpenCode Zen route.
- **Release / knowledge:** The dated official announcement is 2026-03-31 (Inception X and LinkedIn); models.dev records 2026-03-30. The current launch-page front matter says 2026-10-29, so the release date is reported from the dated announcement trail rather than the conflicting page metadata. Knowledge cutoff not disclosed.
- **IDs:** `inception/mercury-edit-2` (models.dev canonical id); `mercury-edit-2` (Inception API). No free Zen ID exists.
- **Context window:** 32,000 tokens for both FIM and Next Edit, with 8,192 maximum output tokens — verified in Inception's Models & Pricing table and independently in the models.dev model record. BenchLM instead lists 128K; that conflict is discussed below.
- **Modalities:** text in / text out only. Reasoning: no — models.dev marks reasoning unsupported. Tool calling: no — models.dev marks tool calls unsupported, and Inception documents only the FIM and Next Edit endpoints. Structured outputs: no. Temperature control: yes.
- **Pricing (as of 2026-11-13):** $0.25 per 1M input tokens and $0.75 per 1M output tokens, with cached input at $0.025 per 1M. Every new Inception API account receives a time-limited allowance of 10 million free tokens; Zed users could also unlock one free month of edit suggestions with a vendor-issued key.
- **Architecture:** proprietary diffusion LLM trained for edit prediction on a curated multi-language edit dataset, then preference-aligned with Kahneman-Tversky Optimization (KTO), an unpaired reinforcement-learning method, using recorded accept/reject feedback. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| Terminal-Bench 2.1 / 4.0 | no verified public score found | — | The model serves no chat or agent endpoint, so terminal harnesses do not apply |
| Tau3 / Tau2 | no verified public score found | — | Not applicable — no agent surface |
| GDPval-AA | no verified public score found | — | Not published |
| Claw-Eval / ClawProBench | no verified public score found | — | Not published |
| Toolathon / MCP-Atlas / SWE Atlas Codebase QnA | no verified public score found | — | Not published; the documented endpoints expose no tool calling |

Reasoning / knowledge:

| Benchmark | Value | Who ran it | Note / source |
|---|---|---|---|
| GPQA Diamond | no verified public score found | — | No general-knowledge evaluation is published for this model |
| HLE | no verified public score found | — | Not published |
| LCR / MLCR | no verified public score found | — | Not published |
| CritPt | no verified public score found | — | Not published |
| Artificial Analysis Intelligence Index | no verified public score found | — | Not published for this specialist model |
| Omniscience Accuracy / Hallucination Rate | no verified public score found | — | Not published |

Coding — the model's actual job:

| Benchmark or metric | Value | Who ran it | Note / source |
|---|---|---|---|
| Vendor quality / latency aggregate | **75.6% overall quality at 221 ms** | Reported by Inception | Official X and LinkedIn launch announcements; vendor-measured, not an independent rerun |
| Zeta 2 comparison | 64.4% quality | Reported by Inception | Same official X announcement; comparison result is vendor-reported |
| Claude 4.5 Haiku comparison | 71.4% quality | Reported by Inception | Same official X announcement; comparison result is vendor-reported |
| GPT-5.4 Nano comparison | 73.5% quality | Reported by Inception | Same official X announcement; comparison result is vendor-reported |
| Gemini 3.1 Flash Lite comparison | no numeric value found | Reported by Inception as a comparison model | Named in the official LinkedIn announcement; no numeric value is exposed in the accessible post text |
| Instinct / FIM / NEP / internal next-edit suite | aggregate only; no per-suite values published | Reported by Inception | The launch post says quality is the average of three open-source suites (Instinct, FIM and NEP) and one internal next-edit benchmark; FIM runs tests against modified code, while the other three use LLM-as-judge against human gold-standard edits |
| Edit acceptance rate vs Mercury Edit 1 | **48% more often accepted** | Reported by Inception | Official X and LinkedIn announcements and launch post; relative delta, no absolute acceptance rate published |
| Displayed-edit rate | **27% lower shown rate** | Reported by Inception | Official X and LinkedIn announcements; relative delta, no absolute shown rate published |
| SWE-bench Verified / SWE-Pro | no verified public score found | — | Not applicable and not published |
| LiveCodeBench | no verified public score found | — | Not published |
| SciCode / AA-SciCode | no verified public score found | — | Not published |
| Vibe code Bench | no verified public score found | — | Not published |

Long context:

| Benchmark or limit | Value | Who ran it | Note / source |
|---|---|---|---|
| MRCR / RULER / GraphWalks | no long-context retrieval reported | — | No long-context benchmark is published |
| Context window | 32,000 tokens, 8,192 max output | Vendor + independent catalogue | Inception Models & Pricing docs; models.dev |
| Practical editable region | 10–15 lines (about 100–150 tokens) recommended; roughly 25 lines (about 250 tokens) practical upper bound | Vendor guidance | Inception Next Edit docs |

Throughput and latency:

| Metric | Value | Who ran it | Note / source |
|---|---|---|---|
| Announced end-to-end latency | **221 ms** | Reported by Inception | Official X and LinkedIn launch announcements; the launch post says speed is measured as end-to-end latency on representative requests |
| Decoding speed | about 1,000 tokens/second | Reported by Inception | Next Edit docs; used by the vendor to derive its practical editable-region guidance |
| Independent latency measurement | no verified public score found | — | No independent benchmark page with a measured value was found |

### Conflicting evidence (vendor vs independent) and how it was resolved

- **Context window.** BenchLM lists a 128K context window, while Inception's own Models & Pricing table gives FIM 32K and Next Edit 32K with 8,192 maximum output, and models.dev independently records 32,000 context / 8,192 output. Resolution: use the vendor specification corroborated by models.dev (32K / 8,192); treat BenchLM's 128K entry as a catalogue error, likely inherited from the general-purpose Mercury line.
- **Benchmark coverage.** The official launch announcements publish an absolute aggregate — 75.6% quality at 221 ms — and numeric competitor results, while BenchLM still reports 0 of 823 benchmark rows and says coverage is coming soon. Resolution: report the official absolute figures as verified public vendor claims, but do not present them as independently reproduced or as a standard general-purpose coding benchmark. The two official social posts corroborate that the same announcement was made through two Inception channels; they are not an independent evaluator.
- **Quality-metric detail.** The launch post says the final quality measurement is the average of Instinct, FIM, NEP and one internal next-edit benchmark, with FIM validated by tests and the other three judged by an LLM against human gold-standard edits. It does not publish the four component scores, the internal benchmark definition, sample sizes, or the aggregate's exact mapping to the later 75.6% post. Resolution: cite 75.6% as the vendor's overall quality figure and preserve the documented methodology without reverse-engineering missing per-suite values.
- **Release date.** Inception's dated X and LinkedIn announcements are 2026-03-31, models.dev records 2026-03-30, and the current launch page front matter says 2026-10-29. Resolution: use the dated announcement trail for the launch date and disclose the page-metadata conflict rather than silently selecting one date.
- **No independent harness applies.** Benchize, LMSpeed, Artificial Analysis and OpenRouter have no Mercury Edit 2 result with a measured score. Resolution: the Coding score is anchored on the new absolute vendor aggregate and the specialist benchmark methodology, but capped because there is still no third-party reproduction or standard general-purpose coding-benchmark result.

### Notes on identity

- Mercury Edit 2 is a **specialist code-editing dLLM**: fill-in-the-middle autocomplete plus next-edit prediction, served only through the FIM and edit-completions endpoints. It has no chat endpoint, no reasoning-effort control, no tool calling and no structured-output mode.
- It is **not** the general-purpose Mercury 2 or Mercury 3 diffusion LLMs, whose chat-model benchmark results and capabilities do not transfer automatically to this editing specialist.
- It is **not** Mercury Decide, the typed decision model served by the decisions endpoint.
- Within Inception's own line, Mercury Edit 2 is the 2026 upgrade of the earlier next-edit model and complements the autocomplete endpoint; it is the model integrated by Zed and other editor products.

### Normalized scores (1–100)

- **Tool use: 20/100.** A deliberate non-agent component: Inception documents only FIM and Next Edit endpoints, models.dev marks tool calls unsupported, and no terminal, τ-bench, GDPval or claw-style harness result exists. Scored near the floor because the capability is absent by design rather than merely unmeasured.
- **Reasoning: 12/100.** Explicitly a non-reasoning model (models.dev: reasoning unsupported) with no reasoning-effort parameter and no GPQA, HLE, LCR or CritPt figure. The score is intentionally low because the model is not built for general reasoning.
- **Context window: 32/100.** A verified 32,000-token window with 8,192 maximum output sits below the 100K tier, which scales down to the 10–49 band. The vendor's guidance that a practical editable region is roughly 10–25 lines also shows that the effective working set for its intended task is small.
- **Multimodal: 15/100.** Text-only in and out, with no image, audio, video or PDF input documented — the text-only floor.
- **Coding: 76/100.** The strongest dimension by design: Inception reports 75.6% overall quality at 221 ms across its four-benchmark next-edit evaluation method, ahead of its published Zeta 2, Claude 4.5 Haiku and GPT-5.4 Nano comparison results, alongside a 48% higher edit-acceptance rate and 27% lower shown rate than Mercury Edit 1. The 76 score follows the 75.6% absolute aggregate, with a cap for the vendor-only measurement, undisclosed per-suite values, and the absence of standard independent general-purpose coding-benchmark results.
- **Cost efficiency: 93/100.** $0.25 input / $0.75 output per 1M with cached input at $0.025 is a low paid tier, and every new Inception account receives 10 million free tokens for a limited period, so the score sits just below the sub-$0.10 band.
- **Overall Score: 31.0/100.** Mean of the five quality dimensions: (20 + 12 + 32 + 15 + 76) / 5 = 31.0. Best fit is an in-editor autocomplete / next-edit component behind an IDE integration, where it is not directly comparable to general chat or agent models.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (nvidia/minimaxai/minimax-m3.1-flash)** — 2026-11-13
- Method: Fresh public web research of Inception's official X and LinkedIn launch announcements, launch post, API model and endpoint documentation, models.dev catalogue, and BenchLM coverage record; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mercury Edit 2 launch announcement — Inception on X](https://x.com/_inception_ai/status/2039025542167695803)
  - [Mercury Edit 2 launch announcement — Inception on LinkedIn](https://www.linkedin.com/posts/inception-labs-ai_today-were-introducing-mercury-edit-2-our-activity-7444790959520886784-Vbnx)
  - [Introducing Mercury Edit 2 — Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-edit-2)
  - [Models & Pricing — Inception API docs](https://docs.inceptionlabs.ai/get-started/models)
  - [Autocomplete (FIM) — Inception API docs](https://docs.inceptionlabs.ai/capabilities/fim)
  - [Next Edit — Inception API docs](https://docs.inceptionlabs.ai/capabilities/next-edit)
  - [Mercury Edit 2 pricing, providers and specs — models.dev](https://models.opencode.ai/models/inception/mercury-edit-2/)
  - [Mercury Edit 2 — BenchLM evidence ledger](https://benchlm.ai/models/mercury-edit-2)
