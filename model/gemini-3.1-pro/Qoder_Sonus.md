# Gemini 3.1 Pro — independent research report

- Source: Google DeepMind / Gemini 3.1 Pro Preview (`gemini-3.1-pro-preview`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro, evaluated through the Preview API model.
- **Short description:** Google's February 2026 general-purpose reasoning model, with strong scientific reasoning, broad multimodal input, and improved coding/tool use. Its academic results are stronger than its demonstrated reliability on every repository or long-context task.
- **Provider / access:** Google Gemini API and AI Studio; launch also names Vertex AI, Gemini Enterprise, Gemini CLI, Antigravity, Gemini app, and NotebookLM. Native Gemini API access is distinct from a Chat Completions or Responses gateway. Consumer subscription access is not an unlimited free API entitlement.
- **Release / knowledge:** Released 2026-02-19. The current model-specific documentation still labels it Preview and lists February 2026 as its latest update; no later GA transition was verified. An indexed official developer-guide snippet gives January 2025 as the cutoff, but the currently readable model-specific page/card omit it and the old guide redirects: treat that cutoff as provisional.
- **IDs:** Base `gemini-3.1-pro-preview`; separate `gemini-3.1-pro-preview-customtools` endpoint prioritizes custom tools alongside bash and can fluctuate on other workloads. This report scores the base endpoint, not Deep Think or a mixture of customtools results. No exact free OpenCode Zen ID was verified.
- **Context window:** Official API limits are **1,048,576 input tokens / 65,536 output tokens**. These are separate limits, not a demonstrated 1M-token retrieval guarantee.
- **Modalities:** Text, image, video, audio, and PDF input; text output. Thinking, function calling, structured outputs, code execution, search/Maps grounding, URL context, file search, caching, and Batch API are documented. Audio generation, image generation, and Live API are explicitly unsupported. Code-generated SVGs, animations, and simulations do not establish native audiovisual generation.
- **Pricing (2026-11-05):** Google standard paid API, per million tokens: **$2 input / $12 output / $0.20 cache read** for prompts at or below 200K; **$4 / $18 / $0.40** above 200K. Output includes thinking tokens. Cache storage is $4.50 per million tokens per hour. Batch input/output are $1/$6 and $2/$9 respectively. Search grounding has a shared 5,000-request monthly allowance, then $14/1,000; individual generated queries may be charged separately. No free API tier is listed for this model, although AI Studio testing can be free.
- **Privacy:** Paid-service prompts/responses are not used to improve Google's products, but limited abuse-prevention logging remains. Unpaid-service terms allow improvement/training use and human review, and prohibit submitting confidential data. Important exceptions: paid-service data terms also apply to EEA/Switzerland/UK users, and AI Studio accounts with an active billing project or Workspace enterprise account count as paid-service access even when Studio itself is free. Free price alone does not determine data handling.
- **Architecture:** Proprietary, based on Gemini 3 Pro; no independently verified parameter count, active-parameter count, or downloadable open-weight license established for this exact model.

### Raw benchmarks found

Sources below distinguish Google's high-thinking, self-computed results from original external evaluations. The [official model-card PDF](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-1-Pro-Model-Card.pdf) and [evaluation methodology](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-1_pro_model_evaluation.pdf) were inspected in-browser because ordinary HTML extraction omitted the table.

Agent / tool use:

- **Terminal-Bench 2.0: 68.5%**, Google, Thinking High, Terminus-2 harness. [Vals' original evaluation announcement](https://www.vals.ai/home) reports **67.4%**, initially first in its evaluated cohort, via Google's API; its full-suite note specifies temperature 1.0 and high thinking. Neither is Terminal-Bench 2.1 or 4.0.
- **Terminal-Bench Hard: 54%**, [Artificial Analysis launch evaluation](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai), February 18 evaluation / February 19 publication. This is AA's named harder evaluation, not an alternative label for the full TB2.0 result.
- **MCP Atlas: 69.2%**, official card, public-set result sourced from Turing. **τ2-bench Retail: 90.8%; Telecom: 99.3%**, Google using Sierra's framework, environment-specific prompt adjustments, and a Gemini user model. Airline was excluded for grading-quality concerns; do not invent a three-domain aggregate.
- **GDPval-AA: 1,316 Elo**, AA launch article; Google's contemporaneous card lists **1,317**. AA says it still trails several contemporary agentic competitors. These are February Elo snapshots, not scores on the current GDPval-AA v2.1 or AA-Briefcase benchmark.
- **APEX-Agents: 33.5%**, official card. **BrowseComp: 85.9%**, Google's Deep Research configuration with search, Python, and browsing, not unaided base-model answering.
- **Finance Agent: 59.72**, Vals full-suite announcement; its earlier Vals Index subset was **58.9%**. The distinct subset/full-suite numbers are retained rather than averaged.
- No verified exact-model public score found in this research for Claw-Eval, ClawProBench, Toolathon, Tau3-Banking, or the newer Terminal-Bench 2.1/4.0 and AutomationBench evaluations.

Reasoning / knowledge:

- **GPQA Diamond: 94.3%** and **HLE: 44.4% without tools / 51.4% with search and code**, official Thinking High table. HLE uses the full text-plus-multimodal set; search evaluations block sources likely to expose benchmark answers. These are not HLE-Diamond or text-only scores.
- **ARC-AGI-2: 77.1%, ARC Prize verified**, official card. [ARC Prize's own February 19 announcement](https://x.com/arcprize/status/2024522812728496470) rounds this to **77% at $0.96/task**, and gives **ARC-AGI-1: 98% at $0.52/task**, both semi-private evaluations. ARC puzzle performance is not long-context retrieval performance.
- **CritPt: 18%**, AA's February original evaluation, covering research-level unpublished physics. Do not relabel this CritPt v2 Hard.
- **AA-Omniscience: 53% accuracy / 50% hallucination rate**, AA February article. These are separate metrics with different denominators, not complementary probabilities for every response.
- **MMMLU: 92.6%**, official card. Vals reports launch-era first-place finishes on GPQA, MMLU Pro, and AIME, but its announcement does not expose their exact percentages; ranks are historical and cohort-specific.
- **Artificial Analysis Intelligence Index:** AA's launch article reports first place and leadership on 6/10 component evaluations. No exact index number was readable there. The [current model profile](https://artificialanalysis.ai/models/gemini-3-1-pro-preview) displays N/A for intelligence under **v5.0.1**; no current numeric index or rank is inferred from chart labels. An absent current widget value is not proof of model retirement.
- **Case Law v2: 65.6%**, Vals' full-suite announcement, historical rank 11. No exact-model LCR/MLCR score verified.

Coding:

- **SWE-bench Verified: 80.6%; SWE-Bench Pro Public: 54.2%**, Google, high thinking, single-attempt bash/file-operation/submit scaffold. Scores average ten runs for Verified and five for Pro; averaging repeated single attempts is not pass@10/pass@5.
- Google adjusted Verified upward by **0.6 percentage points** after fixing three official-harness cases internally. Preserve that adjustment when comparing its score to external unmodified harnesses.
- **SWE-bench Verified: 69.6%**, Vals, Google API/high thinking/temperature 1.0, below its measured predecessor. The announcement does not specify enough scaffold details to equate its run with Google's. The **11.0-point** vendor/external gap is material and cannot be explained by Google's 0.6-point correction alone.
- **SciCode: 59%**, both the official table and AA's original evaluation. These are overlapping evidence, not two unrelated confirmations of every other vendor claim.
- **LiveCodeBench Pro: 2,887 Elo**, official card. Vals also names a historical first place on LiveCodeBench, without a percentage in the announcement. Elo on Pro is not a percentage on the original benchmark; no invented conversion is used.
- **CodeRabbit review evaluation, conducted February 24:** [original article](https://www.coderabbit.ai/blog/gemini-3-1-pro-for-code-related-tasks-more-focus-higher-signal-to-noise) reports **60.9% error-pattern detection**, versus its proprietary production ensemble's 65.2%; actionable precision **33.3%**, important-comment rate **77.8%**, and signal-to-noise ratio **3.5**. Gemini emitted 24% fewer actionable comments. On nine concurrency error patterns it found **5/9**, versus the baseline's 7/9.
- CodeRabbit describes 25 difficult PRs/error patterns across five repositories and uses an LLM judge; its published headline detection percentages do not transparently share that 25-case denominator. Preserve reported percentages and the explicit concurrency counts separately. The baseline is a tuned multi-model workflow, not one competitor model, and tone/verbosity correlations are not reliable correctness guarantees.
- No directly verified numeric Vibe Code Bench, DeepSWE, or newer FrontierCode score was obtained; a Vals Vibe-page fetch failed. These remain evidence gaps, not zero scores.

Long context and multimodal:

- **MRCR v2, eight needles: 84.9% at 128K (cumulative/average), 26.3% at 1M (pointwise)**, official high-thinking model card and methodology. The different aggregation conventions prevent a simple paired accuracy-loss calculation, but the weak 1M result directly refutes any near-perfect full-window retrieval claim.
- **MMMU-Pro: 80.5%**, official result averaged over Standard ten-option and Vision settings. AA's launch evaluation independently describes first place on MMMU-Pro, and Vals also reports a historical first place; their retrieved announcements do not expose exact percentages for direct comparison.
- Audio/video input support is verified by API specifications, but no exact-model quantitative VideoMMMU or speech-recognition result was verified. Native output remains text only.

### Evidence comparison and practical limits

1. **Conflicting third-party study:** [LayerLens](https://layerlens.ai/blog/gemini-3-1-pro-benchmark-review) claims 14,549 cases, ARC-AGI-2 92.3%, IF-Evals 78.4%, BFCLv3 71.2%, LiveCodeBench 61.0%, SWE Bench Lite 48.7%, and BIRD-CRITIC 32.5%. It also says 2M context, contradicting the official 1,048,576 limit, and does not expose sufficient split/effort/harness detail to reconcile its ARC result with ARC Prize's verified 77.1%. Some illustration labels are inconsistent. These are attributed conflicting claims, **not normalization anchors**; Lite, Pro Elo, and Verified must not be conflated.
2. **Benchmarks versus workflows:** AA supports strong scientific reasoning, while Vals and CodeRabbit show consequential repository/review weaknesses. [Zvi Mowshowitz's March review](https://thezvi.substack.com/p/gemini-31-pro-aces-benchmarks-i-suppose) compiles reports of excellent one-shot visual/code outputs alongside instruction-following, tool-loop, and rollout problems. Those anecdotes add use-case caution, not a measured failure rate or a fresh November reliability test.
3. **Dates and serving configurations:** February vendor/AA results, Vals' original suite, and CodeRabbit's February test are not current frontier rankings. The 1,316/1,317 GDPval discrepancy is retained as a one-point source difference; its precise cause was not established. Base Preview, customtools, and Deep Think are never silently merged.
4. **Economics:** AA's launch run used approximately **57M output tokens**, cost **$892**, and generated about **114 tokens/second**. The current profile displays **126 tokens/second** and **18.74 seconds to first answer token**. Different snapshots/settings preclude a controlled speedup claim. High thinking, long-prompt premiums, and tool fees matter more than short-prompt sticker price alone.
5. **Research coverage:** Eight search requests plus direct official/independent page inspection were completed for this subject. Original evidence spans Google, Artificial Analysis, ARC Prize, Vals, and CodeRabbit. Repeated secondary summaries were not counted as independent benchmark replications. No peer repository reports or queue scores informed normalization.

### Normalized scores (1–100)

- **Tool use: 85/100.** MCP Atlas 69.2%, TB2.0 68.5%/67.4%, strong retail/telecom results, and GDPval around 1,316 support a capable agent; lower hard-task completion and missing newer long-horizon evaluations cap it below the frontier band.
- **Reasoning: 93/100.** GPQA 94.3%, HLE 44.4% unaided, ARC-AGI-2 77.1%, and AA CritPt 18% establish strong reasoning; hallucination, older evaluation dates, and poor full-window MRCR prevent a ceiling score.
- **Context window: 95/100.** The verified 1,048,576-input limit qualifies for the million-token tier, but MRCR's 26.3% pointwise 1M result rules out the retrieval-based premium or 100.
- **Multimodal: 94/100.** Verified image/PDF/audio/video input plus MMMU-Pro 80.5% provide broad understanding; text-only output and absent independent speech/video scores cap the rating.
- **Coding: 87/100.** SciCode 59%, SWE-Pro 54.2%, and strong terminal results are balanced against Vals Verified 69.6%, CodeRabbit's 60.9% detection and concurrency misses, and the unresolved vendor/harness gap.
- **Cost efficiency: 72/100.** $2/$12 standard pricing, caching, and batch discounts give useful paid value, but $4/$18 long-context rates, charged thinking/tool usage, and no free API tier limit efficiency.
- **Overall Score: 91/100.** Half-up mean of the five quality dimensions is (85 + 93 + 95 + 94 + 87) / 5 = 90.8 → 91; cost is excluded. Best suited to multimodal scientific analysis and supervised coding, with selective retrieval and independent code validation.

---

## Signature

- Provided by: **Qoder Sonus** — 2026-11-05
- Method: Sequential, fresh multi-source public-web research, including browser inspection of official PDFs and comparison of original evaluator results; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Official model-specific API documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Google launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/)
  - [Official model card](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-1-Pro-Model-Card.pdf)
  - [Official evaluation methodology](https://storage.googleapis.com/deepmind-media/gemini/gemini_3-1_pro_model_evaluation.pdf)
  - [Google API pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-pro-preview)
  - [Google API data-use terms](https://ai.google.dev/gemini-api/terms)
  - [Artificial Analysis original launch evaluation](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai)
  - [Artificial Analysis current profile](https://artificialanalysis.ai/models/gemini-3-1-pro-preview)
  - [ARC Prize original semi-private results](https://x.com/arcprize/status/2024522812728496470)
  - [Vals original evaluation announcements](https://www.vals.ai/home)
  - [CodeRabbit original code-review evaluation](https://www.coderabbit.ai/blog/gemini-3-1-pro-for-code-related-tasks-more-focus-higher-signal-to-noise)
  - [LayerLens conflicting evaluation](https://layerlens.ai/blog/gemini-3-1-pro-benchmark-review)
  - [Independent qualitative review](https://thezvi.substack.com/p/gemini-31-pro-aces-benchmarks-i-suppose)
