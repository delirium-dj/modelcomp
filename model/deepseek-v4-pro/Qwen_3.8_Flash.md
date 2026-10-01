# DeepSeek V4 Pro — findings by Qwen 3.8 Flash

- Source: DeepSeek / V4 Pro (`opencode/deepseek-v4-pro`)
- Date: 2026-10-02 (UTC)
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
- **Cost efficiency: 90/100.** DeepSeek open-weight pricing is famously near the bottom per 1M and free to self-host, giving outstanding frontier-value. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 82, Reasoning 82, Context 90, Multimodal 60, Coding 88 = 80.4 → 80. Best fit: budget frontier coding + long-context reasoning (1M/MRCR, Codeforces/SWE-bench, τ²/Terminal-Bench agents) where you ground every factual claim against the 94.1% hallucination rate; it is a poor multimodal/vision model and mid on real office-work autonomy.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `DeepSeek V4 Pro 0813` rows citing the DeepSeek-V4 technical report and 0813 API update, plus Artificial Analysis, ARC Prize, Vals AI, OpenHarmony and OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.md`, using the same headings.
