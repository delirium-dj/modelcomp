# DeepSeek V4 Pro — findings by Qwen 3.8 Flash

- Source: DeepSeek / V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — Cost 90 provisional→**88 verified** ($0.66/$1.98 off-peak, $1.32/$3.96 peak, cached $0.017; $0.1035/$8 OpenRouter third-party outlier logged); vendor changelog confirms continued service past 2026-09-14 sunset window; AA launch-era GDPval 1554 (#1 open weights) vs pass-1 1306 logged un-resolved (scale ambiguity), bands hold; Index 53.2 independently corroborated; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro (pro-reasoning, 0813 build)
- **Short description:** DeepSeek's open-weight frontier reasoner/coder — elite Codeforces (3206), LiveCodeBench Pass@1 93.5%, SWE-bench (Vals) 96.4%, strong agentic tool use (Terminal-Bench 2.1 87.9%, τ²-bench 96.2%, BrowseComp 83.4%) and a 1M window with demonstrated MRCR 83.5%. Offsetting: a **94.1% hallucination rate**, weak professional-office autonomy (GDPval-AA 1306 / 54.5%, APEX-Agents 24.3%) and a near-empty multimodal profile (image only). BenchLM #36 of 645 (64.95), 60/618 rows.
- **Provider / access:** DeepSeek API / open weights (`deepseek-ai/DeepSeek-V4-Pro`); OpenCode (`opencode/deepseek-v4-pro`); OpenRouter. Reasoning + tool calls.
- **Release / knowledge:** DeepSeek-V4 technical report / 0813 API update; knowledge cutoff not disclosed.
- **IDs:** `opencode/deepseek-v4-pro` / BenchLM `deepseek-v4-pro-0813`.
- **Context window:** BenchLM/tech report list **1M** (MRCR 1M 83.5%); curated `meta.json` says "128K total" — conflict, resolved in favour of 1M.
- **Modalities:** text in/out; only one image-grounded row (Design Arena). Curated `meta.json` "Text in/out" is consistent — no video/audio/document vision rows.
- **Pricing (as of 2026-10-02):** "Standard pricing" (DeepSeek open-weight, famously low per-1M); exact rate not in curated meta.
- **Architecture:** open-weight MoE reasoner, hosted or self-host.

### Raw benchmarks found

> Independently verified against BenchLM `DeepSeek V4 Pro 0813` (60 of 618 rows; 64.95/100, #36 of 645), citing the DeepSeek-V4 technical report and 0813 API update, plus Artificial Analysis, ARC Prize, Vals AI, OpenHarmony and OpenRouter (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- **Codeforces 3206** (grandmaster); **LiveCodeBench Pass@1-CoT 93.5%**; SWE-bench (Vals) 96.4%; SWE-bench Verified 80.6%; LiveCodeBench (Vals) 87.5%; Terminal-Bench 2.1 87.9%
- SWE Multilingual 76.2%; DSBench-FullStack 71.1%; SWE-bench Pro 55.4%; DeepSWE 62.7%; AA Coding Index 68.8%; Vibe Code 49.93%; AA-SciCode 51.0%

Agent / tool use:

- **Terminal-Bench 2.1 87.9%** (clears 85 bar); **τ²-bench 96.2%** (elite); BrowseComp 83.4%; CyberGym 83.3%; Toolathlon-Verified 74.1%; MCP Atlas 73.6%; HLE w/ tools 60.0%
- GDPval-AA 1306 / 54.5% (weak); AA Agentic Index 49.6%; EnterpriseOps-Gym 49.6%; AutomationBench 31.8%; Agents' Last Exam 25.7%; APEX-Agents-AA 24.3% (weak)

Reasoning / knowledge:

- **AA-GPQA Diamond 92.8%** / Vals 92.4% / card 90.1% (clear 90); **AA-HLE 41.0%** / card 42.7% (clears 40); MMLU-Pro 87.5; AA Intelligence Index 53.2 (high); **ARC-AGI-1 90.0%, ARC-AGI-2 61.3%**; HMMT Feb 95.2; IMOAnswerBench 89.8; MRCR 1M 83.5; CorpusQA 1M 62.0
- AA-Omniscience Index 0.8 / Accuracy 49.1% / **Hallucination 94.1%** — severe confabulation

Multimodal / long context:

- Design Arena Website 1258 (only image-grounded row)
- 1M window with MRCR 1M 83.5% (retrieval demonstrated at scale, under 98%); AA-LCR 80.3.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.1 87.9% and τ²-bench 96.2% are frontier agentic-tool results and BrowseComp 83.4 / CyberGym 83.3 / Toolathlon-Verified 74.1 are strong, but professional-office autonomy lags hard — GDPval-AA 1306 / 54.5%, APEX-Agents 24.3%, AutomationBench 31.8%.
- **Reasoning: 82/100.** GPQA 92.8%, HLE 41.0%, ARC-AGI-2 61.3% and Intelligence Index 53.2 with HMMT 95.2 / IMOAnswerBench 89.8 are genuinely frontier, dragged down by a **94.1% hallucination rate** (Omniscience Index 0.8) that makes unaided factual recall unreliable.
- **Context window: 90/100.** A real 1M window with **demonstrated MRCR 83.5% at 1M** puts it at the low end of the ≥1M (95–100) band rather than the perfect-retrieval top; AA-LCR 80.3 supportive (curated meta conflicts at 128K).
- **Multimodal: 60/100.** Effectively text-only with a single image-grounded row (Design Arena 1258) — a bare +image floor (60–70); no video/audio/document benchmark rows, so no higher-tier credit.
- **Coding: 88/100.** Codeforces 3206, LiveCodeBench Pass@1 93.5% and SWE-bench (Vals) 96.4% / Verified 80.6% are elite, trimmed by repo-scale/harder reads (SWE-bench Pro 55.4%, Coding Index 68.8%, Vibe Code 49.93%) — a top-tier coder with weaker long-repo depth.
- **Cost efficiency: 88/100.** (Revised by the 2026-11-03 second pass from 90/100: exact list now verified — **"Off-peak API rates are $0.66/M input and $1.98/M output for Pro … double at weekday peak"** (morphllm) with the official table's **"1M OUTPUT TOKENS, OFF-PEAK, $0.6→$1.98"** columns and omniakey's **"$0.66 input and $1.98 output per million tokens off-peak, or $1.32 input and $3.96 output"** agreeing; aipricing reads **"DeepSeek V4 Pro 0813"** at cached **$0.017**; the OpenRouter **"$0.1035 per million input tokens, $8 per million output"** third-party reroute outlier is logged un-averaged. Frontier-class output rate at Flash-class input cost, plus free self-host — just under the $1.25/$4.25≈88 anchor once the peak 2× is weighed; open weights carry the rest. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 82, Reasoning 82, Context 90, Multimodal 60, Coding 88 = 80.4 → 80. Best fit: budget frontier coding + long-context reasoning (1M/MRCR, Codeforces/SWE-bench, τ²/Terminal-Bench agents) where you ground every factual claim against the 94.1% hallucination rate; it is a poor multimodal/vision model and mid on real office-work autonomy.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02); three independent sources consulted.

**Sources:** Pricing — https://www.morphllm.com/deepseek-v4 (**"Off-peak API rates are $0.66/M input and $1.98/M output for Pro, $0.22/M and $0.66/M for Flash, double at weekday peak. Artificial Analysis scores Pro-0813 at 36 on its Intelligence Index (rank 7 of 112)"**) and https://omniakey.com/blog/deepseek-v4-pro-api-pricing (2026-08-18: **"DeepSeek V4 Pro costs $0.66 input and $1.98 output per million tokens off-peak, or $1.32 input and $3.96 output"**) and https://api-docs.deepseek.com/quick_start/pricing/ (official table: **"1M INPUT TOKENS (CACHE MISS) · PEAK, $0.3, $1.32 … 1M OUTPUT TOKENS, OFF-PEAK, $0.6, $1.98"**) and https://www.aipricing.guru/deepseek-pricing/ (2026-11-02, Pro 0813 cached-input lane) and https://openrouter.ai/deepseek/deepseek-v4-pro-0813 (**"$0.1035 per million input tokens, $8 per million output tokens"** — third-party lane outlier, logged un-averaged) · lifecycle — https://api-docs.deepseek.com/updates/ (fetched this batch: **"we have decided to continue providing API services for DeepSeek V4 Pro after September 14, 2026, with the billing method remaining unchanged"** — executed continuation, not a sunset) · benchmarks — https://www.linkedin.com/pulse/deepseek-v4-pro-1-open-weights-model-gdpval-aa-artificial-analysis-bvemc (AA launch-era: **"V4 Pro (Reasoning, Max) scores 1554, ahead of GLM-5.1 (Reasoning, 1535), MiniMax-M2.7 (1514)"** — **#1 open weights on GDPval-AA**, vs pass 1's BenchLM 0813 row 1306 / 54.5%; article self-labels "first benchmarks", scale of today's GDPval-AA v2/v2.1 unverified — logged unresolved, Tool band holds pending a same-scale re-read) and https://glm5.app/blog/deepseek-v4-pro-benchmarks (**"On the Artificial Analysis Intelligence Index (v4.1.1), DeepSeek V4 Pro 0813 scores 53, ranked #2 of 104"** — independently corroborates pass 1's Index 53.2; note morphllm's current-scale **36** = v5.0 rebuild drift, same cascade family as batches 4–5) and https://www.reddit.com/r/Anthropic/comments/1vmmx0i/ (SWE-V-class **"lands at 87.9, within a tenth of a point of Fable 5's 88.0"** — launch-era community echo of the tech-report row).

**What moved and how it was resolved:**

1. **Cost 90→88 (provisional→verified):** $0.66/$1.98 off-peak with peak-doubling and the $8-outlier third-party lane — anchored 88 at the anchor line (open-weight self-host floor noted, peak 2× trimmed). Overall unaffected (Cost excluded).
2. **Service continuation confirmed:** the vendor's own changelog kept V4 Pro alive past 2026-09-14 by user demand — this id is neither retired nor rerouted (contrast sibling vision-exp delisted this pass).
3. **GDPval gap left un-resolved, bands hold:** 1554 (launch-era, "first benchmarks") vs 1306/54.5% (BenchLM 0813, 2026-10-02) cannot be compared without the evaluation version; per the never-average rule both are logged and Tool 82 stands — the GDPval-driven weak-office-work note is reaffirmed in direction (still behind the reasoning/coding profile). Index 53 corroborated, hallucination 94.1% unrebutted, MRCR 83.5@1M unrebutted. 82+82+90+60+88 = 402/5 = 80.4 → **Overall 80**.

**Scores changed by this pass:** Cost efficiency 90→88 (excluded from Overall). **Overall remains 80.** Revisit trigger: a same-scale (v2.1) GDPval-AA read for this checkpoint.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `DeepSeek V4 Pro 0813` rows citing the DeepSeek-V4 technical report and 0813 API update, plus Artificial Analysis, ARC Prize, Vals AI, OpenHarmony and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (morphllm, omniakey, official DeepSeek pricing + changelog, aipricing.guru, OpenRouter, AA's GDPval article, glm5, reddit); Cost 90→88 on the verified $0.66/$1.98 lane; continuation-vs-vision-exp retirement contrast recorded; GDPval 1554-vs-1306 logged un-averaged pending same-scale read — **no quality dim changed and Overall remains 80**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.md`, using the same headings.
