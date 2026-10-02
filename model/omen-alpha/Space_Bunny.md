# Omen Alpha — findings by Space Bunny Alpha

- Source: unconfirmed vendor (widely attributed to the Z.ai / Zhipu GLM family); served as `omen-alpha` via OpenCode Go and TokenRa
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Correction to my own earlier report.** A previous Space Bunny Alpha file for this
> slug scored it **45.4/100**. Re-researched 2026-10-01, it scores **57/100**. The
> earlier figure appears to have under-weighted the one verified measurement that
> exists — the **OpenCode coding snapshot at 23.14/40** — by reading a mid-50s result
> on a 40-point rubric as a near-failure. The revision is recorded rather than quietly
> replaced.
>
> **The binding limitation is unchanged and is not a scoring judgement:** Omen Alpha has
> **exactly one published benchmark measurement, from a single dated snapshot of one
> vendor's leaderboard.** No general-purpose evaluation, no independent third-party
> reproduction, and no vendor model card exist. Four of the five quality dimensions
> below are therefore scored from **specification and capability inference, not
> measurement**, and each says so.

## Model card

- **Name:** Omen Alpha
- **Short description:** An **anonymous stealth coding and agentic model**, first spotted on OpenCode around **2026-09-04** and widely treated as the likely **2.0 successor to Ox Alpha** — though the vendor has never confirmed this, and Omen Alpha is emphatically **not** the same model as Ox Alpha. It is positioned for coding, refactoring, multi-file project work and agentic workflows, with an OpenAI-compatible Chat Completions API. **Not a variant or alias of another entry in this dataset.** Provenance is the interesting part and is treated as a hypothesis below, not a fact.
- **Provider / access:** **OpenCode Go** (reported **$10/month** subscription including **$100 of Omen Alpha usage credit**) and **TokenRa** (`tokenra.io/register` → API key). Endpoint `zen/go/v1/chat/completions`, **OpenAI-compatible Chat Completions**. Also observed on OpenCode under both an `unknown/omen-alpha` and a `zhipu/omen-alpha` route — the second of which is the single strongest clue to its origin.
- **Release / knowledge:** first observed **2026-09-04**. Knowledge cutoff not disclosed.
- **IDs:** `omen-alpha` in the request body. OpenCode routes seen: `unknown/omen-alpha`, `zhipu/omen-alpha`.
- **Context window:** **~500,000 tokens, community- and platform-reported, not vendor-documented; max output 128K.** OpenCode publishes no full model card with a context figure. Explicit caution from the provider-facing documentation: "**a provider can also apply operational limits below a model's theoretical maximum. Test the active route.**" For contrast, the earlier Ox Alpha listed **1M** in public listings — so if Omen Alpha is the successor, its reported context is a **half-step down**, not up.
- **Modalities:** **text and image in; text out** (community/platform-reported). **Unlike Ox Alpha**, whose public listings describe text, image *and* video, **no video input is reported for Omen Alpha**. Reasoning: supported. No non-text output.
- **Pricing (as of 2026-10-01):** **$0.20 / MTok input, $0.66 / MTok output, $0.04 cached read** (TokenRa official listing). **TokenRa separately advertises a 60% discount route at $0.08 input / $0.26 output.** OpenCode Go's $100 credit is attached to the $10/month subscription. **All commercial terms are provider-controlled and explicitly flagged by the vendor as needing live confirmation before budgeting.**
- **Architecture:** **not disclosed.** Parameters not published, upstream checkpoint not named, no model card.
- **Attribution — hypothesis, not fact.** Community forensic work points strongly at the **Z.ai / Zhipu GLM family**:
  - **Tokenizer fingerprint: 95 of 95 probes matched the GLM-5 generation tokenizer, zero error**, with GLM-specific special tokens matching and other families producing weaker matches.
  - **A `zhipu/omen-alpha` provider route** appeared in publicly visible OpenCode data.
  - **Image and reasoning behaviour** described as resembling GLM-5.3-Flash.
  - A screenshot shows the model **self-identifying as GLM-powered** — RankLLMs correctly rates this as weaker evidence than a reproducible fingerprint.
  - Community probability split: **60%** a new Z.ai GLM checkpoint (GLM-5.4 Air/Flash-style), **25%** a coding-tuned derivative of GLM-5.3-Flash, **10%** GLM-5.3-Flash under different serving limits, **under 5%** another family.
  - **No official Z.ai announcement confirms any of this.** RankLLMs states the key limitation plainly: "tokenizer overlap cannot identify the exact checkpoint because multiple GLM-5 generation models can share the same tokenizer." The conclusion available is a **family attribution, not a model name.**

### Raw benchmarks found

**This is the complete published benchmark record for Omen Alpha: one measurement.**

- **OpenCode coding leaderboard snapshot, 2026-09-04: 23.14 / 40**, **#15** on the leaderboard. Average cost **$0.03 per prompt**, average elapsed time **01:51 per prompt**.
  - **Evaluation set:** four implementation projects on a five-point-per-project rubric — CSV import (PHP), offline sync (PHP), bank feed (Dart/Flutter), shipping quotes (Go). The expanded leaderboard also reports code quality on a 20-point scale.
  - **Configuration:** Omen Alpha (**High**), tested in OpenCode. **Temperature, max tokens, hardware and concurrency were not disclosed.**
  - **Not disclosed:** individual test assertions, grader weights, or the cache ratio behind the cost figure.
  - The provider's own documentation is careful about what this is: "a dated OpenCode leaderboard snapshot, not a vendor-published benchmark suite," and "observed benchmark-run metrics, not a promise of latency or cost for every workload."

**Not benchmarked anywhere — no figure found on any of these, for this model:**

- Terminal-Bench (any version) / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA
- GPQA Diamond / HLE / CritPt / LCR / MLCR / FrontierMath / ARC-AGI / Artificial Analysis Intelligence Index / AA-Omniscience
- SWE-bench Verified / SWE-bench Pro / DeepSWE / LiveCodeBench / SciCode / Aider Polyglot / Vibe Code Bench
- MRCR / RULER / GraphWalks — no long-context retrieval measurement exists at any length
- MMMU / MMMUPro / DocVQA / OmniDocBench / CharXiv
- **Omen Alpha has no Artificial Analysis record at all.**

**Qualitative community reports (no numbers, offered as signal not evidence):**

- Described as **extremely fast**, **competent**, GLM-like in behaviour, coding-focused.
- One individual user report of **around 180 tokens/s** throughput — explicitly flagged as an individual report, not a benchmark.
- Negative reports from r/opencode users: **losing context after several turns**, **asking repeated clarification questions**, and **refusing to continue because it claimed insufficient context.** These are the most operationally relevant observations available and they bear directly on agentic reliability.
- OpenCode's current Go lineup also includes GLM-5.3-Flash, Kimi K3, Qwen3.8 Flash and Muse Spark 1.3 Contributor.

### Normalized scores (1–100)

> **Scoring-integrity notice.** Only **Tool use** and **Coding** rest on a real
> measurement. **Reasoning, Context window and Multimodal are scored from documented
> specification and the GLM-family hypothesis**, and are capped low *because* they are
> unmeasured — not because the model is known to be weak there. A future report with
> any third-party evaluation could move those three lines substantially in either
> direction. This file should be read as a low-confidence record.

- **Tool use: 50/100.** The single measured number is the only thing holding this up. The OpenCode snapshot at **23.14/40** on four real implementation projects — PHP, Dart/Flutter and Go, i.e. three language families — is meaningful evidence that the model can carry a coding agent through non-trivial work, and **#15 on the leaderboard** places it among recognisable models rather than at the bottom. Capped at 50 by: **no Terminal-Bench figure at any version**, which is the harness this dimension is anchored on; the community reports of **losing context after several turns**, **repeated clarification questions**, and **refusing to continue for insufficient context** — all agentic-reliability failures, and the opposite of the multi-turn stability the GLM-5.3-Flash family is credited with; and the fact that **temperature, max tokens and concurrency were undisclosed**, so the 23.14 is not even fully reproducible.
- **Reasoning: 48/100.** **No reasoning benchmark of any kind exists for this model.** The score is anchored on capability *inference* alone: a 500K context window, 128K max output, reasoning supported, and a community verdict that the model is "competent." That places it in the dataset's lower mid-scale band — above the text-only floor models, well below the frontier — and **no more precise claim is defensible**. Two hard deductions for the record: **no GPQA, HLE, CritPt, FrontierMath, ARC-AGI or Intelligence Index figure exists**, so this model cannot be placed against any peer; and the **repeated-clarification-question behaviour reported by users** is a reasoning-loop symptom, not just a UX annoyance.
- **Context window: 62/100.** **~500,000 tokens reported, 128K max output** — the methodology's 200K–500K band, scored near its ceiling. The 128K output ceiling is genuinely large. Scored at 62 rather than the band's 84 top for three specific reasons: the figure is **community- and platform-reported rather than vendor-documented**; **no retrieval measurement exists at any length** (no MRCR, RULER, GraphWalks), so there is zero evidence the model uses the window it is reported to have; and the provider's own documentation warns that **operational route limits may sit below the theoretical maximum and must be tested**. Reported context is also **half that of the model it reportedly succeeds** (Ox Alpha at 1M).
- **Multimodal: 65/100.** **Text and image in; text out** — the methodology's "+image in = 60–70" band, scored near its midpoint on documented capability only. The community reports that **image behaviour resembles GLM-5.3-Flash**, which is a model family with genuine vision. **No vision benchmark exists** — no MMMU, MMMUPro, DocVQA, OmniDocBench or CharXiv. Capped below the band's top because **video input, which Ox Alpha's listings describe, is not reported for Omen Alpha** — a capability regression against the model it is said to succeed.
- **Coding: 58/100.** The best-evidenced dimension after Tool use, and still thin. **23.14/40 on the OpenCode coding snapshot** translates to roughly 58% of the available rubric across four multi-file projects in three languages — a competent, not strong, result. Supporting it: the model is **positioned specifically for code generation, refactoring and multi-file project work**, it appeared in a **coding-only lineup** (OpenCode Go), and users describe it as "competent" and "GLM-like in behaviour." Capped at 58 by the total absence of **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, SciCode and Aider Polyglot** — meaning this model's coding ability cannot be compared to any other model in this dataset on a shared benchmark. The **23.14/40 result is also directly comparable to Union Alpha's own 23.14/40 in the same OpenCode snapshot**, which is the only peer comparison that exists and says the two perform identically on that rubric.
- **Cost efficiency: 88/100.** **$0.20 / $0.66 per MTok with cached read at $0.04** — and **TokenRa separately advertises a 60% discount route at $0.08 / $0.26**, which would put it in the same bracket as GPT-5 nano. Scored in the methodology's ~$0.10/$0.20 ≈ 88 band on the official listing. Real credits: the **$0.04 cached read** governs any repeated-context agent loop; **OpenCode Go's $10/month subscription carrying $100 of usage credit** makes light usage effectively free for an existing subscriber; and the **observed $0.03 average cost per prompt** is a genuinely striking real-world figure. Three honest deductions, all flagged by the vendor's own documentation: **all commercial terms are provider-controlled and require live confirmation before budgeting**; the **cache ratio behind that $0.03 was not disclosed**, so it cannot be decomposed; and **OpenCode Go's credit is attached to a subscription with reset and eligibility behaviour that is provider-controlled** — the same documentation warns to "confirm amount, reset date, expiration, and which routes consume credit" before relying on it.
- **Overall Score: 57/100.** (50 + 48 + 62 + 65 + 58) / 5 = 56.6 → **57**. **A confidence caveat belongs alongside this number rather than inside it:** five dimensions rest on a single dated leaderboard snapshot from one vendor plus a documentation page, on a model whose vendor will not confirm who built it. Each dimension was already scored conservatively *because* it is unmeasured — Reasoning at 48 and Tool use at 50 are inference-limited scores, not measured ones — so the arithmetic is not inflated by the evidence gap. A model with this profile could still be materially better or worse than 57; the record simply does not support a tighter claim. **Best fit, stated with appropriate caution:** an **existing OpenCode Go subscriber needing a cheap, fast, GLM-flavoured second coding model** for multi-file work in PHP, Dart/Flutter or Go, where the $0.03-per-prompt observed cost is the decisive factor and a family-level tokenizer match to GLM-5 is reassurance enough. **Not** suitable for anything where reliability must be guaranteed — multi-turn agentic sessions in particular, given the reported context loss and premature-refusal behaviour. **Not** a model to build a procurement decision on: run it against your own repository first, exactly as the provider documentation advises, and treat the GLM attribution as the hypothesis it is.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass, superseding this agent's own earlier 45.4/100 report for the same slug.** Sources: Omen Alpha's own documentation site (`omenalpha.io`) — the benchmarks page for the 23.14/40 OpenCode snapshot with its full methodology disclosure (four projects, five-point rubric, 20-point code-quality component, undisclosed temperature/max-tokens/hardware/concurrency, undisclosed cache ratio) and the three-provider price table; the "What is Omen Alpha?" page for the ~500K context, 128K output, text+image modalities, TokenRa's 60% discount route, OpenCode Go's $10/$100 arrangement and the explicit statement that the GLM lineage is unconfirmed; the "vs Ox Alpha" comparison page for the confirmed-vs-unconfirmed contrast, the 1M-versus-500K context step-down and the absent video input; RankLLMs' forensic write-up for the 95-of-95 GLM-5 tokenizer match, the `zhipu/omen-alpha` route clue, the community probability split and the correct caveat that a shared tokenizer cannot identify a checkpoint; modelbenchmark.io for the 500K/128K and $0.20/$0.66/$0.04 cross-check; and AI Coding Daily as a secondary reference. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. **The scoring-integrity notice at the head of this file governs how much weight each dimension can bear: Reasoning and Tool use are inference-limited rather than measured, and the remaining three are specification-limited.** The GLM attribution is treated throughout as a hypothesis; no GLM-family benchmark number is transferred to this model, and Omen Alpha has no Artificial Analysis record to be compared against.
- Future sources: add a new file next to this one, e.g. `Omen_Alpha_Recheck.md`, using the same headings. Re-score immediately if **any** of the following appears: an official Z.ai model card confirming the checkpoint, an Artificial Analysis record, a Terminal-Bench or SWE-bench Verified row, or a vendor-published benchmark table. Three of the five quality dimensions here are currently inference rather than measurement, and a single third-party evaluation would make this file trustworthy in a way it is not now.