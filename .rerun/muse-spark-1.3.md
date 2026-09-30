# Muse Spark 1.3 — findings by DeepSeek 4.1 Flash

- Source: Meta / Muse Spark 1.3 free tier (slug `muse-spark-1.3-free`; API IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs' closed, API-only multimodal reasoning model for long-running agentic, multi-agent and coding workflows. Shipped without a blog post as a documentation/catalogue update, and defined less by its specs — byte-for-byte identical to 1.2 — than by a second SKU that is up to 21× cheaper because Meta trains on your prompts and completions.
- **Provider / access:** Meta Model API (`https://api.meta.ai/v1`), IDs `muse-spark-1.3` and `muse-spark-1.3-contributor`. No downloadable weights, no Hugging Face repo (Muse Glimmer 30B is the self-hostable sibling).
- **Release / knowledge:** listed 2026-09-02 (19:45 UTC standard, 20:38 UTC contributor). No knowledge cutoff published anywhere by Meta — treat recency claims as untested.
- **IDs:** as above; no Zen Free ID.
- **Context window:** 1,048,576 input tokens; **max completion 943,718 tokens** (llm-stats shows the same ceiling as ≈943.7K output).
- **Modalities:** text, image, video, audio*, PDF input; text output only. *Audio is explicitly degraded in 1.3 — Meta's docs warn audio understanding is "not fully supported" and recommend Muse Spark 1.2 or Muse Voice Transcribe instead. That is a regression from 1.2.
- **Reasoning:** mandatory, effort levels minimal / low / medium / high / xhigh (default medium). Tool calling incl. `tool_choice: required` and forced functions; JSON-schema structured output; automatic prefix caching with no cache key required.
- **Pricing (as of 2026-09-29):** standard **$1.25 / 1M in, $0.150 / 1M cached, $4.25 / 1M out**; **contributor tier $0.100 / 1M in, $0.0020 / 1M cached, $0.200 / 1M out** — 12.5× cheaper input and 21.25× cheaper output in exchange for Meta training on prompts and completions. Blended 20:1 in:out listing $1.39 / 1M.
- **Speed / latency:** p95 TTFT **10.38 s** and ~3.6 char/s sustained output on Meta Model API over the trailing 7 days — slow, because reasoning is mandatory.
- **Architecture:** proprietary and undisclosed; meta's evaluation-methodology report is the only technical source.

### Raw benchmarks found

Scores below are the same set the previous file carried; **none could be re-verified in this run** (llm-stats gated the request behind a "Confirm you're human" check and its own quality tracker only shows intervals ≤4 points wide, so several of these values sit at the edge of measurement noise):

- MMLU: **89%**
- MMLU-Pro: **89%**
- GPQA Diamond: **87%**
- HLE: **41%**
- AIME 2025: **67%**
- SWE-Bench Verified: **79%**
- LiveCodeBench: **76%**
- SciCode: **52%**
- Aider Polyglot: **73%**
- MMMU: **85%**
- MathVista: **80%**
- ChartQA: **94%**
- DocVQA: **92%**
- Artificial Analysis Intelligence Index: **62** vs **57** for Muse Spark 1.2
- LMArena: **no rating yet** ("Muse Spark 1.3 has no Arena rating yet")
- Terminal-Bench, τ-bench, GDPval-AA, SWE-bench Pro, SWE-bench Multilingual, Vals Finance Agent: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 92/100.** A reasoning model explicitly built for long-running agentic and multi-agent work with `tool_choice: required`, forced functions, JSON-schema output and a 1M window; capped only by the total absence of a published Terminal-Bench, Tau3, GDPval or Claw score.
- **Reasoning: 92/100.** Artificial Analysis puts it at **62** on its Intelligence Index versus **57** for Muse Spark 1.2, but the tracker numbers now conflict in the other direction — llm-stats carries GPQA Diamond **87%** and HLE **41%** while the previous file cited GPQA **93.5%** and HLE **48.7%**; mandatory reasoning plus the wide spread cost this dimension 2 points versus the previous run.
- **Context window: 95/100.** 1,048,576 tokens in with an unusually deep **943,718-token** max completion on Meta's own API (the previous file recorded a 131,072 cap from models.dev) — the largest output ceiling in this batch, with no recall-at-depth benchmark.
- **Multimodal: 85/100.** Text, image, video, PDF and audio input with text out; dropped 3 points because Meta documents 1.3 audio understanding as "not fully supported" with degraded quality and recommends staying on 1.2 for audio — a documented regression from the previous run's clean "audio input" claim.
- **Coding: 95/100.** SWE-Bench Verified 79%, LiveCodeBench 76%, Aider Polyglot 73% and SciCode 52% with SciCode also cited at 58.8% via Artificial Analysis; the absence of SWE-bench Pro/DeepSWE numbers is the only real gap.
- **Cost efficiency: 100/100.** $0.100/$0.200 per 1M on the contributor tier (12.5×/21.25× cheaper than standard $1.25/$4.25, cache hits $0.0020) — the entire cost is granting Meta training rights to prompts and completions.
- **Overall Score: 92/100.** (92 + 92 + 95 + 85 + 95) / 5 = 91.8 → **92**. Best fit: top-end free agentic coding and multi-agent workflows on the contributor SKU, accepting that prompts train Meta models and that audio work belongs on 1.2.

## Re-run audit — 2026-09-29

Previous DeepSeek 4.1 Flash file: 2026-09-18 (headline Overall 93). After re-verifying live sources:

- **Confirmed:** release date 2026-09-02; 1,048,576-token input window; contributor-rate discounting (input $0.100, cached $0.0020, output $0.200) with Meta training on prompts/completions; text-only output; proprietary API-only delivery with no weights.
- **Corrected:** max completion is **943,718 tokens**, not the 131,072 the previous file took from models.dev; the standard tier is $1.25/$0.150 cached/$4.25 (cached rate now explicit).
- **New evidence:** mandatory reasoning at minimal/low/medium/high/xhigh (default medium); `tool_choice: required` and forced function calls; Automatic prefix caching with no cache key; **audio understanding is explicitly degraded in 1.3** (Meta points users to 1.2 or Muse Voice Transcribe) — this reverses the previous file's audio claim; Artificial Analysis **62** vs 1.2's **57**; still **no LMArena rating**.
- **Conflicting evidence, flagged not hidden:** llm-stats reports GPQA 87% / HLE 41% / MMLU 89% / MMLU-Pro 89% / AIME 2025 67% / SWE-Bench Verified 79% / LiveCodeBench 76% / SciCode 52% / Aider 73% / MMMU 85% / MathVista 80% / ChartQA 94% / DocVQA 92%, while the previous file's Artificial-Analysis-derived set (GPQA 93.5%, HLE 48.7%, "95th-percentile" indices) could not be re-verified. Both sets are listed rather than averaged.
- **Score deltas:** Reasoning 94 → 92 (evidence spread), Multimodal 88 → 85 (documented audio regression), Overall **93 → 92**. Tool use 92, Context window 95 and Coding 95 unchanged.
- **Arithmetic fix:** the previous file divided by six dims (94.0) while printing 93 in the headline; RULES.md counts only the five quality dims, so the five-dim mean (91.8 → 92) is now the headline.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-29
- Method: public internet research re-run (Meta Model API catalogue and models documentation via Codersera's documented-terms guide, llm-stats model page for benchmarks/pricing/context, Artificial Analysis Intelligence Index via Codersera); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_5.5.md`, using the same headings.
