- Source: Meta Superintelligence Labs (`muse-ember`; revealed 2026-11-09 from the OpenRouter/OpenCode `crouton-alpha` stealth preview)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Ember 1.0
- **Short description:** Meta's smallest, most efficient reasoning model, designed for complex reasoning execution and the repeatable work agents do all day — tool calls, coding sub-tasks, routing, extraction, and long-document parsing. It is the first model trained using Muse Wonder Full. Revealed 2026-11-09 as the maker behind the anonymous `crouton-alpha` stealth preview (OpenRouter 2026-11-03 → confirmed Meta Muse-family). Meta positions it below Muse Wonder (hardest problems) and Muse Spark (coding/agentic), for high-volume repeatable agentic work at ~$0.14 per Artificial Analysis task.
- **Provider / access:** Meta Superintelligence Labs. Available on the Meta Model API (`muse-ember-1.0`, Responses API) and Muse Code; also on Google Cloud and Oracle Cloud. Prior stealth access: OpenRouter `stealth/crouton-alpha`, OpenCode Zen `opencode/crouton-alpha` (free preview week from 2026-11-03).
- **Release / knowledge:** Released 2026-11-09; knowledge cutoff not published.
- **IDs:** `muse-ember-1.0` (Meta Model API); dataset id `muse-ember`; prior stealth ids `stealth/crouton-alpha` (OpenRouter) and `opencode/crouton-alpha` (Zen). Alias registry maps `crouton-alpha` → `muse-ember`.
- **Context window:** 1,048,576 (1M) tokens total; up to 524,288 (512K) max output. **DISCREPANCY:** the stealth-era Zen listing reported max output 943,718; the official Meta figure is 512K. No long-context retrieval benchmark (MRCR/RULER/AA-LCR) is published.
- **Modalities:** Text, image, audio, video in → text out. Natively multimodal input (reads screenshots, charts, scanned documents, voice memos, meeting recordings, and video without a separate model); output is text-only (no image/audio generation). Reasoning always on, adjustable (medium/high/max/xhigh); tool calling + structured outputs supported.
- **Pricing (as of 2026-11-10):** $0.10 / 1M input, $0.50 / 1M output, $0.004 / 1M cached input (≤200K); over 200K context $0.30 / $1.50. ~$0.14 per Artificial Analysis Intelligence Index task (max), ~$0.12 (xhigh) — the cheapest model scoring ≥36 on the Index. **DISCREPANCY resolved:** the scaffold/stealth meta listed "$0/$0 free preview"; official production pricing is $0.10/$0.50.
- **Architecture:** Undisclosed parameter count; "smallest, most efficient" Muse-family worker class, reasoning-effort levels and context limits matching Muse Spark 1.3. Trained using Muse Wonder Full. Speed ~2s to first token, ~72 tokens/s median; uses ~1/3 the output tokens of Claude Haiku 5.5 (max). Below Meta Superintelligence Scaling Framework high-risk thresholds across chem/bio, cyber, and loss-of-control categories.

### Raw benchmarks found

> Official Meta launch table (2026-11-09; Muse Ember **max** effort vs Claude Haiku 5.5 max and GPT-6 Luna max) + Artificial Analysis independent analysis (Intelligence Index, cost-per-task). "Best" = highest of the three compared models.

General / reasoning:

- **Artificial Analysis Intelligence Index: 36** (max; tied-best with Claude Haiku 5.5, above GPT-6 Luna 28); **34** at xhigh. Meta's own effort-curve table lists 35.8 (max) / 33.9 (xhigh).
- Agents' Last Exam (end-to-end agent tasks, Linux subset): **61.6%** (best; vs Luna 57.1%, Haiku 57.0%)
- Personal Superintelligence Index (internal composite of personal/knowledge work): **46.8%** (best; vs Luna 37.0%, Haiku 36.1%)
- AA-Omniscience accuracy: **21.1%** (lowest of the compared set; vs Haiku 5.5 34.7%, Gemini 3.8 Flash-high 50.5%) — declines to answer 64% of questions, which keeps its hallucination rate at **17.4%** (half of Haiku 5.5's). Knowledge is Meta's stated main weakness.

Agent / tool use:

- AutomationBench-AA (E2E business workflows): **37.8%** strict pass@1 (Meta blog; best — vs Luna 20.2%, Haiku 13.9%). Artificial Analysis separately reports **68.1%** (level with Muse Wonder max and GPT-6 Astra) — a differing aggregation of the same benchmark.
- AA-Briefcase: **1521 Elo** (trails Claude Haiku 5.5's 1574)
- Coding Agent Index-AA (coding in real agent harnesses / Muse Code): **46** (best; vs Haiku 37, Luna 31) — lead driven by SWE-Atlas-QnA-AA and Terminal-Bench 4.0.

Coding:

- Terminal-Bench 4.0 (agentic terminal coding, best published harness): **40.9%** (best; vs Haiku 39.2%, Luna 16.4%)
- FrontierCode 2.0-AA (real engineering tasks judged on mergeability): **27.2%** (trails Haiku 34.9%; vs Luna 25.2%)
- No SWE-bench Verified / DeepSWE / LiveCodeBench / SciCode figures published at launch.

Multimodal (image/audio/video in, text out):

- PerceptionBench (w/ tools, fine-grained visual perception): **80.6%** (best; vs Haiku 78.6%, Luna 62.8%)
- OSWorld 2.1 (computer use across desktop apps): **69.5%** partial / **33.8%** binary (best; vs Haiku 68.9/27.8, Luna 50.5/17.0)
- GDP.pdf-AA (professional work over long documents): **22.8%** (tied-best with Luna; vs Haiku 20.8%)

Cost / efficiency (Artificial Analysis):

- Cost per Intelligence Index task: **$0.14** (max), **$0.12** (xhigh) — cheapest model scoring ≥36; on the Intelligence-vs-Cost Pareto frontier at both settings.
- Claude Haiku 5.5 (max) costs ~3x more ($0.41) for the same Index 36; ~4x cheaper than DeepSeek V4.1 Flash 1017 (max, 33, $0.60) and GLM-5.3-Flash (28, $0.58).
- Muse Wonder (max) scores 44 at $6.95/task (8 pts higher for ~50x the cost); Muse Spark 1.3 (max) Index 37 at $2.39/task ($1.25/$4.25 tokens).

### Normalized scores (1–100)

> Derived from the raw numbers above via `model-comparison.md`. Overall = half-up mean of the five quality dims; Cost efficiency scored independently, never counted.

- **Tool use: 80/100.** Leads its compared cohort on nearly every agentic benchmark — AutomationBench-AA 37.8% strict pass@1 (AA reports 68.1%, level with Muse Wonder/GPT-6 Astra), Agents' Last Exam 61.6%, Personal Superintelligence Index 46.8%, OSWorld 2.1 69.5%, and Coding Agent Index-AA 46 (vs Haiku 5.5's 37) — but held at upper-mid rather than the 90+ frontier band because AA-Briefcase 1521 Elo trails Haiku 5.5 (1574) and the ~1750 GDPval frontier anchor, and it is explicitly a small efficiency-tier worker model.
- **Reasoning: 76/100.** AA Intelligence Index 36 (max) matches Claude Haiku 5.5 and beats GPT-6 Luna (28), with best-in-cohort Agents' Last Exam 61.6% and PSI 46.8%; capped below the frontier band because knowledge is its stated main weakness (AA-Omniscience accuracy 21.1%, the lowest of the compared set; declines 64% of questions), no GPQA-Diamond/HLE figure is published, and Meta frames it as trailing the frontier on the hardest novel problems. Its 17.4% hallucination rate (half of Haiku 5.5's) is a calibration plus but reflects refusal rather than knowledge.
- **Context window: 95/100.** 1M-token native window with up to 512K output — the rubric's ≥1M band (95-100), floored at 95 because no long-context retrieval benchmark (MRCR/RULER/AA-LCR) is published and it is an efficiency-tier model rather than a long-context specialist.
- **Multimodal: 88/100.** Native text + image + audio + video input → text out, with best-in-cohort vision (PerceptionBench w/tools 80.6%, OSWorld 2.1 69.5% partial, GDP.pdf-AA 22.8%); comprehensive audio+video understanding places it at the top of the video/PDF band, held just under 90 because output is text-only (no speech/image generation) and absolute vision ceilings trail true frontier multimodal models.
- **Coding: 76/100.** Coding Agent Index-AA 46 (best-in-cohort, ahead of Haiku 5.5's 37 and Luna's 31) and Terminal-Bench 4.0 40.9% (beats Haiku 39.2%) show strong agentic coding for its tier, but FrontierCode 2.0-AA 27.2% trails Haiku's 34.9%, no SWE-bench/DeepSWE/LiveCodeBench figures are published, and Meta positions it for repeatable coding sub-tasks rather than frontier engineering.
- **Cost efficiency: 97/100.** $0.10/$0.50 per MTok ($0.004 cached; $0.30/$1.50 over 200K) at ~$0.14 per AA task (max) / $0.12 (xhigh) — the cheapest model scoring ≥36 on the Intelligence Index and squarely on the efficiency Pareto frontier (matches Haiku 5.5 at ~1/3 the cost-per-task, ~4x cheaper than DeepSeek V4.1 Flash / GLM-5.3-Flash), with ~60% cheaper cached input and ~1/3 the output tokens of Haiku 5.5. Excluded from Overall.
- **Overall Score: 83.0/100.** Mean of the five quality dims (80+76+95+88+76)/5 = 83.0. Divergence note: my independent read is ~+5.6 above the peer cohort (77.4) because it fully weights Meta's official 2026-11-09 reveal table and calibrates against this dataset's own **Claude Haiku 5.5 = 84** anchor — which Muse Ember matches on the Intelligence Index (36) and beats on ~9 of 13 published benchmarks (AutomationBench, Agents' Last Exam, PSI, Terminal-Bench 4.0, Coding Agent Index, GDP.pdf, OSWorld, PerceptionBench) at a third of the cost-per-task, while adding a 1M window and full audio/video multimodal input. The peer average appears to reflect the earlier `crouton-alpha` stealth-era scoring (anonymous maker, AA/BenchLM 404, zero benchmarks) that this report supersedes. Best fit: high-volume repeatable agentic work — tool calls, coding sub-tasks, document/vision extraction, routing — at frontier-tier efficiency; weaker on open-ended knowledge (declines 64% of questions) and the hardest novel engineering (pair with Muse Wonder).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-10
- Method: public internet research (official Meta Superintelligence Labs "Introducing Our Smallest, Most Efficient Model: Muse Ember" launch post + evaluation tables; Artificial Analysis release article — Intelligence Index 36, cost-per-task $0.14, agentic/coding/knowledge breakdown; OpenRouter model-page specs). Supersedes the prior `Qwen_3.8_Max.md.excluded` (Crouton Alpha, 2026-11-09), written when the maker was anonymous and zero verified benchmarks existed (AA/BenchLM returned HTTP 404); Meta has now confirmed Crouton Alpha = Muse Ember 1.0 and published full evaluations, and Artificial Analysis now tracks it — the "genuinely new verified evidence" branch of `tasks/research.md` Step 3.3, exactly as the twin's own "Future sources" note anticipated. Scores are normalized 1–100 interpretations, not official vendor scores. Researched independently of the peer findings in this folder.
- Reference URLs:
  - [Introducing Our Smallest, Most Efficient Model: Muse Ember (Meta — official launch + evaluation tables)](https://research.meta.ai/blog/muse-ember)
  - [Meta's Muse Ember is the cheapest model scoring 36 on the Intelligence Index (Artificial Analysis)](https://artificialanalysis.ai/articles/meta-s-muse-ember-is-the-cheapest-model-scoring-36-on-the-intelligence-index)
  - [Muse Ember model page (Artificial Analysis)](https://artificialanalysis.ai/models/muse-ember)
  - [Muse Ember compared to other AI models (OpenRouter)](https://openrouter.ai/compare/meta/muse-ember)
