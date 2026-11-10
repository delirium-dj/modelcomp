# Fledge Alpha — findings by Claude Opus 5

- Source: undisclosed vendor, served free via OpenCode Zen as `fledge-alpha-free`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha
- **Short description:** An **anonymous free stealth preview** that appeared on OpenCode Zen at the start of October 2026 with a 1M-token listed context, image input, adjustable reasoning and tool calling — and no vendor, no technical report and no licence. The strongest independent finding about it is architectural rather than qualitative: **it is probably a router, not a single model.** Stealth Models sent the same request three times and Fledge "counted **7,536 input tokens on the first two runs, then 6,499 on the third**", which combined with markedly inconsistent output quality "fit[s] a routed service" ([Stealth Models, 2026-10-02/03](https://stealthmodels.com/fledge-alpha/)). This repo's own metadata reaches the same conclusion from its own probes: "routing probes show a multi-model backend (DeepSeek V4.1, Kimi K3)".
- **Provider / access:** **OpenCode Zen only**, as `fledge-alpha-free` (selector `opencode/fledge-alpha-free`), on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)). Reachable without a personal Zen API key. **US regions confirmed; other regions unidentified.** The OpenCode plugin suite in this repository includes a dedicated `fledge-endpoint-retry` plugin, which is independent corroboration that the endpoint has needed transient-failure handling in practice.
- **Release / knowledge:** **2026-09-30** first recorded token usage in OpenCode's telemetry; **2026-10-01** listed in the Zen catalogue as `fledge-alpha-free`; **2026-10-02** specifications published on models.dev. Knowledge cutoff: no verified public date found — there is no technical report. **It is eight days old at the time of this report**, which bounds how much evidence can exist.
- **IDs:** `fledge-alpha-free` (Zen). **A genuine free ID**, and the only route.
- **Context window:** **1,048,576 tokens listed**, with a **131,072-token maximum output** — both from models.dev catalogue metadata rather than a vendor specification, since no vendor exists to publish one. A notable operational datapoint: OpenCode's telemetry snapshot records a **91% input cache ratio**, which is consistent with users genuinely reusing very large prompts against it.
- **Modalities:** **Text + images in → text out.** Reasoning: **yes, with three effort levels — low / high / max**. Tool calls: supported. **Open weights: explicitly "not listed as open."** No audio, no video, no generated media.
- **Pricing (as of 2026-10-08):** **$0 input, $0 output, and $0 on reasoning tokens.** OpenCode's October 2 telemetry snapshot records **$0 recorded spend against 12 billion tokens, 471 unique users and 12,504 completed sessions** — the free tier is real and being used at scale. **The material caveat is privacy:** Zen's own documentation places Fledge Alpha Free in the group where "**during its free period, collected data may be used to improve the model**" — i.e. it is **outside** Zen's zero-retention policy, unlike Space Bunny Free or LongCat 2.5 Preview Free.
- **Architecture:** **Unknown, and probably not a single model.** No parameter count, no activation scheme, no training description, no licence. Two identity hypotheses circulated early and **both remain unconfirmed**: DeepSeek V4.x (community discussion) and Thinking Machines' Inkling (because of its OpenCode demonstrations). Stealth Models is careful about the limits of its own evidence: "Token counts alone do not establish its architecture or identify the models."

### Raw benchmarks found

> **One independent researcher, three academic benchmarks, small samples with published confidence intervals.** Stealth Models ran 206 answered questions on 2026-10-03 and — to its credit — publishes exact question counts and 95% confidence intervals rather than bare percentages. Those CIs are wide and I weight them accordingly. **No aggregator covers this model**: BenchLM, Artificial Analysis and BenchmarkList all return nothing (`benchmarklist.com/models/fledge-alpha/` → 404).

Agent / tool use:

- **Nothing.** No Terminal-Bench, no τ²/τ³-bench, no OSWorld, no MCP-Atlas, no GDPval, no BrowseComp, no SWE-bench-as-agent. Tool calling is listed as supported and is unmeasured.
- Usage rather than capability: **12,504 completed OpenCode sessions** and a 91% input cache ratio in the first three days indicate real agentic deployment, but that is adoption evidence, not a score.

Reasoning / knowledge (Stealth Models, 2026-10-03):

- **GPQA Diamond: 92.3%** — **36/39 correct**, 95% CI **79.7–97.3%**
- **MMLU-Pro: 92.0%** — **92/100 correct**, 95% CI **85.0–95.9%**
- **Humanity's Last Exam (text-only): 25.4%** — **17/67 correct**, 95% CI **16.5–36.9%**
- Head-to-head against Space Bunny on shared questions: GPQA Diamond **92.3% vs 82.1%** (4 questions only Fledge got right, 0 only Bunny); MMLU-Pro **92.0% vs 77.0%** (16 vs 1); HLE **25.8% vs 30.3%** (2 vs 5, i.e. **Bunny wins HLE**)
- CritPt, AA-LCR, AIME, Artificial Analysis Intelligence Index, AA-IFBench, AA-Omniscience: **no verified public score found** — there is **no hallucination measurement**
- Qualitative behavioural finding worth recording: "Fledge **often rushes to a simple answer**" and "can rush past the deeper reasoning a task needs"

Coding:

- **Nothing.** No SWE-bench Verified or Pro, no LiveCodeBench, no Terminal-Bench, no Aider Polyglot, no SciCode. Community reports are "promising anecdotal tests" ([promptblueprints](https://promptblueprints.tech/news-article/fledge-alpha-appears-as-a-free-opencode-model-but-its-identity-is-unknown/)) and nothing more.

Multimodal:

- **No vision benchmark of any kind.** Image input is listed in the catalogue and untested publicly.
- Six SVG generation tasks were run (raccoon-on-dog-on-jet-ski, pelican on a bicycle, Mona Lisa, beach scene, selfie, Newton's Mirror) with results described as ranging "from simple sketches to carefully composed scenes" — the raccoon singled out as a standout. **This is text-to-vector *generation*, not vision**, and is not credited as multimodal evidence; its inconsistency is, however, part of the router evidence.

Long context:

- **No MRCR, RULER, LongBench or needle-retrieval number at any depth.** The 1,048,576-token figure is catalogue metadata with zero validation.

Throughput:

- **~61 output tokens/second** across six speed tests, inclusive of reasoning tokens (Stealth Models); [TokenDyno](https://tokendyno.com/models/opencode-zen/fledge-alpha-free/) tracks it on an hourly cadence

### Normalized scores (1–100)

- **Tool use: 45/100.** Tool calling is listed, three reasoning-effort levels exist, and **12,504 completed OpenCode sessions in three days** show it is genuinely being driven as an agent. But **not one agentic benchmark exists**, and for a router whose backend may change between calls, tool-loop determinism is exactly the property most at risk. Scored below the midpoint on absence of evidence, not on evidence of absence.
- **Reasoning: 68/100.** The two headline numbers are genuinely high — **GPQA Diamond 92.3% and MMLU-Pro 92.0%**, and the head-to-head against Space Bunny is decisive (16 MMLU-Pro questions only Fledge answered correctly, against 1 the other way). But I discount them substantially and say why: **39 and 100 questions respectively**, with the GPQA confidence interval running **79.7–97.3%** — the point estimate is not the finding, the interval is. HLE at 25.4% is mid-band and Space Bunny actually beats it there. Add "often rushes to a simple answer" and the absence of any hallucination measurement, and the high 60s is as far as this goes.
- **Context window: 78/100.** 1,048,576 tokens with a **131,072-token output ceiling** is a strong listed specification, and the **91% input cache ratio** in real OpenCode telemetry is meaningful indirect evidence that users are actually pushing large reused prompts through it. Held well below where 1M alone would sit because the figure is **catalogue metadata from models.dev, not a vendor specification** — nobody has validated it, and a routed backend could serve different effective windows per call.
- **Multimodal: 48/100.** Image input is listed and **completely untested** — no MMMU, no chart, no document, no OCR, nothing. The SVG gallery is text-to-vector generation and is explicitly not credited here. Scored just below the midpoint: the modality is catalogued as present, its quality is entirely unknown.
- **Coding: 48/100.** **Zero coding benchmarks.** What exists is anecdote ("promising"), one developer's comparative verdict that "Fledge is the one worth your time" against Space Bunny, and 12,504 OpenCode coding sessions. That is suggestive and unscoreable. The midpoint-adjacent score reflects a model that is demonstrably functional as a coding assistant with no measurement to calibrate it.
- **Cost efficiency: 90/100.** **$0 on input, output *and* reasoning tokens** — with reasoning free, this is the cheapest way in this dataset to run a three-level-effort reasoning model over a million-token context, and OpenCode's own telemetry confirms **$0 spend across 12 billion tokens**. ~61 tok/s is usable. Docked 10 points for four disclosed risks rather than price: the preview is **limited-time**, **collected data may be used to improve the model** (Fledge is specifically *excluded* from Zen's zero-retention group), the backend is a **router that may change without notice**, and only **US access is confirmed**.
- **Overall Score: 57.4/100.** Mean of the five non-cost dims (45 + 68 + 78 + 48 + 48) / 5 = 57.4. Best fit: a **free, fast, large-context scratchpad** — exploratory coding, broad-knowledge Q&A, long-document reading — on **non-confidential data only**, given the data-use terms. Its measured academic reasoning is genuinely impressive for a free route (GPQA 92.3%, MMLU-Pro 92.0%, both beating Space Bunny head-to-head), but the score is held down by how little exists: one independent researcher, three small-sample benchmarks, no coding or agentic measurement at all, an unvalidated context claim, an untested vision path, and a backend that appears to change between identical requests. Treat every number here as provisional on an eight-day-old anonymous route.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **Stealth Models'** independent Fledge Alpha research page (the 1M/131K catalogue specifications, text+image input, low/high/max reasoning levels, tool-call support, "not listed as open" weights status, the GPQA Diamond / MMLU-Pro / HLE results with exact question counts and 95% confidence intervals, the head-to-head comparison against Space Bunny on shared questions, the ~61 tok/s six-test throughput figure, the tokenizer probe showing 7,536/7,536/6,499 input tokens on identical requests, the router hypothesis and its explicit limits, the unconfirmed DeepSeek V4.x and Inkling identity guesses, the Sep 30 / Oct 1 / Oct 2 timeline, the OpenCode telemetry snapshot of 12B tokens / 471 users / 12,504 sessions / 91% cache ratio / $0 spend, and the US-only region confirmation); the **OpenCode Zen documentation** (the free `fledge-alpha-free` ID, $0 rates, limited-time status, and its placement in the "collected data may be used to improve the model" group rather than the zero-retention group); plus AnyRouter, promptblueprints, aipromonow and TokenDyno for corroboration of specifications and throughput tracking. BenchLM, Artificial Analysis and BenchmarkList were all checked and have **no entry**; `benchmarklist.com/models/fledge-alpha/` returned 404. The small-sample confidence intervals are reported and weighted rather than the point estimates being taken at face value. SVG generation results are explicitly **not** credited as vision evidence. No benchmark was imported from DeepSeek V4.1, Kimi K3 or Inkling, since no identity is confirmed and all three have or may have their own folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
