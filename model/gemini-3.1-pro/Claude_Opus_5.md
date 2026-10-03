# Gemini 3.1 Pro — findings by Claude Opus 5

- Source: Google / Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro. Status is genuinely ambiguous in public sources: one tracker (last verified 2026-06-18) calls it "generally available — current GA flagship", while a review dated 2026-07-13 states it was **still labelled `preview` in the Gemini API**. The API ID itself retains the `-preview` suffix, which supports the latter. No `-free` API SKU; the Gemini app offers it free with limits.
- **Short description:** Google's Pro-tier frontier generalist, released in preview on **2026-02-19** as the successor to Gemini 3 Pro — an incremental upgrade that kept the 1M-token window, dynamic thinking and the full multimodal input set while lifting reasoning and coding scores, most dramatically ARC-AGI-2 (77.1% against Gemini 3 Pro's 31.1% base). Variant/alias flag: **this is a legacy entry as of this report's date.** Gemini 3.5 Pro (2M context, Deep Think) was announced at Google I/O in May 2026 and was still limited-preview in mid-June; by October 2026 the Flash line has iterated through 3.6/3.7/3.8 and Gemini 4 Argon exists, so 3.1 Pro no longer carries the flagship slot it held at launch.
- **Provider / access:** Gemini API (`gemini-3.1-pro-preview`), Google AI Studio, Vertex AI, and the Gemini app (free with limits; expanded on Google AI Pro at $19.99/month and Google AI Ultra at $99.99/month, cut from $249.99). Native surface is the Gemini API, not OpenAI Chat Completions. No OpenCode Zen `opencode/*` ID verified.
- **Release / knowledge:** Released 2026-02-19 (preview). Knowledge cutoff: **no verified public figure found.**
- **IDs:** `gemini-3.1-pro-preview` (Gemini API, AI Studio, Vertex AI). **No free-tier API ID verified** — free access is app-based with limits, not a metered `$0` API SKU.
- **Context window:** **1,000,000 input tokens / 64,000 max output tokens** — consistently reported across the Google pricing page, multiple independent trackers and the model's own listing. Roughly five times the standard window on the rival flagships of its generation. Practical caveat: the window is economically tiered, not flat — see pricing.
- **Modalities:** Input: **text, images, video, audio and PDFs** (native multimodality, not an adapter). Output: text only. Reasoning: yes — dynamic thinking, inherited from Gemini 3 Pro. Tool calls: yes (agentic coding and autonomous browsing are explicitly benchmarked). JSON mode: no verified public documentation found in this pass.
- **Pricing (as of 2026-10-03):** Tiered by prompt length, per 1M tokens — **$2.00 in / $12.00 out at ≤200K context, rising to $4.00 in / $18.00 out above 200K** up to the 1M limit. Cached input listed at **$0.20** by an independent API index (blended ~$4.50 at a 3:1 ratio). At launch this made it the cheapest of its flagship cohort (against GPT-5.5 at $5/$30 and Claude Opus 4.8 at $5/$25) and ~60% more expensive than the previous-generation Gemini 2.5 Pro ($1.25/$10.00). Note the structural trap: using more than a fifth of the advertised window **doubles the input rate and raises output 50%**.
- **Architecture:** Proprietary, closed weights. Parameter count, active parameters and topology: not disclosed — no verified public figure found.

### Raw benchmarks found

> All headline numbers below are **Google-reported from the February 2026 launch** unless marked otherwise; vendor figures should be read as a ceiling. Where a standardized public leaderboard disagrees with the vendor figure, both are recorded.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found for 2.1. **Terminal-Bench 2.0: 68.5%** (agentic command-line coding)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld / AutomationBench (computer use): no verified public score found
- **BrowseComp: 85.9%** (autonomous multi-step web research and information synthesis) — the strongest agentic signal published for this model

Reasoning / knowledge:

- GPQA Diamond: **94.3%** — reported as the highest score on this benchmark at the time of release, and corroborated as such by two independent trackers
- HLE: **44.4%**
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **no clean, traceable figure found.** Two aggregators disagree and neither cites a version: one lists 29.7 (#37 of 72), another scores it 65.09/100 (#35 of 212) and explicitly flags its own figure as *Estimated*. Google's own launch claim is positional rather than numeric — "leads 13 of 16 major benchmarks" against competing frontier models.
- **ARC-AGI-2: 77.1%** (novel-reasoning generalization; up from the Gemini 3 Pro base of 31.1%)
- Omniscience Accuracy / Hallucination Rate: no verified public score found. A tracker-documented behavioural limitation carries over from Gemini 3 Pro: it "can be overconfident when wrong", so critical factual output needs verification.

Coding:

- SWE-bench Verified / SWE-Pro: **SWE-bench Verified 80.6%** (0.2 points behind Claude Opus 4.6's 80.8%, and far behind Claude Opus 4.8's 88.6%). **SWE-bench Pro ~54.2% Google-reported, but ~46.1% on the standardized public leaderboard** — an ~8-point vendor-versus-leaderboard gap on the same benchmark (Claude Opus 4.8: 69.2%).
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- **No long-context retrieval result reported** — no MRCR, RULER or GraphWalks figure found at any window length for this model ID, so the 1M window carries no published recall rate.

### Normalized scores (1–100)

- **Tool use: 74/100.** **BrowseComp at 85.9%** is a genuine autonomous-research result and **Terminal-Bench 2.0 at 68.5%** sits above the methodology's mid band (TB ~45–60% → 50–70), so this is not a mid-tier model. But it cannot approach the frontier band because **five of the methodology's six tool-use references are simply absent**: no Tau3-Banking, no GDPval-AA, no Claw-Eval (explicit penalty), no OSWorld/AutomationBench, and no Terminal-Bench 2.1 figure to compare against the ~88% frontier anchor. One terminal score from an older harness version plus one browsing score is thin evidence for an agentic dimension.
- **Reasoning: 92/100.** The strongest dimension by a wide margin and the one with unambiguous frontier evidence: **GPQA Diamond 94.3%** clears the 90%+ reference and was the best published figure for that benchmark at release, **HLE 44.4%** clears the 40%+ reference, and **ARC-AGI-2 77.1%** is a large, independently-notable jump over its own predecessor's 31.1%. Capped at 92 rather than higher because **MRCR/LCR and CritPt are unreported**, the Intelligence Index cannot be pinned to any traceable figure (two aggregators disagree, one self-labels as estimated, and both place it mid-table against the current field), the numbers are vendor-reported launch figures, and the documented overconfidence-when-wrong behaviour is a real reasoning-reliability caveat.
- **Context window: 95/100.** A verified **1,000,000-token input window** places it in the ≥1M tier (95–100). It sits at the tier floor for three reasons: the 100 condition (≥98% retrieval at 512K+) is **entirely unverified** — no MRCR/RULER/GraphWalks figure exists for this ID; the **64,000-token output ceiling sits exactly at the methodology's <64K caveat boundary** and is half what the frontier Opus tier offers; and uniquely among the 1M-class models in this dataset, the window is **not flat-rated** — crossing 200K doubles input cost and raises output 50%, so the usable-at-sane-cost window is effectively 200K.
- **Multimodal: 90/100.** Native input across **text, images, video, audio and PDFs** with text-only output puts it at the floor of the methodology's top band (90–100) on the strength of audio and video ingestion. It gets no more than the floor because **not a single multimodal benchmark was published for this model** — no MMMU, no CharXiv, no LVBench, no document-understanding or ASR figure was found anywhere — so the breadth is documented in the spec sheet and entirely unquantified in results, and there is no non-text output path.
- **Coding: 82/100.** **SWE-bench Verified 80.6%** is a real frontier-adjacent result, but it was already 0.2 points behind Claude Opus 4.6 at launch and is ~8 points behind Claude Opus 4.8, and the agentic picture is weaker than the headline: **Terminal-Bench 2.0 at 68.5% falls short of the methodology's 85%+ coding reference**, and **SWE-bench Pro drops from the vendor's ~54.2% to ~46.1% on the standardized public leaderboard** — the clearest vendor-inflation signal in this report. With **no DeepSWE, LiveCodeBench, SciCode or Vibe Code Bench figure at all**, the 90–100 band is unreachable; 82 reflects one strong verified-harness result against a thin and partly deflated agentic record.
- **Cost efficiency: 66/100.** At $2.00 / $12.00 it is better than the $3/$15 anchor that maps to ~60, and at launch it was the cheapest model in its flagship cohort while leading the most benchmark rows — a genuine value position, reinforced by $0.20 cached input and a free (limited) app tier. Three deductions keep it in the 60s: the **>200K tier at $4.00 / $18.00** penalises exactly the long-context work the model is sold for, there is **no $0 API SKU**, and most decisively, time has eroded the value case — by October 2026 Gemini 3.8 Flash delivers better agentic-coding results at **$0.75 / $3.75**, roughly a third of this model's standard rate, so 3.1 Pro is no longer the cheap option within its own vendor's catalogue.
- **Overall Score: 86.6/100.** Mean of the five non-cost dimensions (74 + 92 + 95 + 90 + 82) / 5 = 86.6 — best fit for **reasoning-heavy and research-heavy work on long multimodal inputs**: graduate-level science Q&A (GPQA 94.3%), abstract/novel reasoning (ARC-AGI-2 77.1%), autonomous web research (BrowseComp 85.9%) and single-call analysis of large PDF, video or audio corpora. Do not choose it for agentic terminal work or repository-scale coding, where its own vendor's cheaper Flash line and Anthropic's Opus line both beat it, and keep prompts under 200K tokens or the cost advantage disappears. Treat it as a legacy flagship: the ID still carries `-preview`, the successor line has shipped repeatedly since, and every headline number here is an unrefreshed February 2026 vendor figure.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only — DuckDuckGo result set for Gemini 3.1 Pro benchmarks/pricing/context; The AI Rankings model page (last verified 2026-06-18) for specs, the tiered pricing table, SWE-bench Verified/Pro figures including the standardized-leaderboard delta, ARC-AGI-2, GPQA, access routes, successor status and documented limitations; AISO Tools review (model released 2026-02-19, reviewed 2026-07-13, citing Google's Gemini API pricing page) for the benchmark table (GPQA Diamond, ARC-AGI-2, SWE-bench Verified, HLE, BrowseComp, Terminal-Bench 2.0), the preview-label status and the pricing tiers; DuckDuckGo result snippets from two independent API/benchmark aggregators for the conflicting Intelligence Index figures and the cached-input rate. Those sources attribute to Google's February 2026 launch materials, the Gemini API pricing page, Artificial Analysis, llm-stats, NxCode and the public SWE-bench Pro leaderboard. No peer `model/` findings files were read. Unavailable figures (Terminal-Bench 2.1, Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, OSWorld/AutomationBench, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE, MRCR/RULER/GraphWalks, CritPt, hallucination rate, knowledge cutoff, parameter count, and any multimodal benchmark) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
