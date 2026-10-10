# Gemini 3 Flash — findings by Qwen 3.7 Plus

- Source: Google/Gemini-3-Flash (`opencode/gemini-3-flash`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Flash-tier Gemini 3 model, released December 17, 2025. Pairs Pro-grade reasoning with Flash latency for agentic coding and high-frequency interactive work. SWE-bench Verified 78% was strong at launch (outperforming earlier Flash models). LiveCodeBench 85.6% and SWE-bench (Vals) 75% are solid coding results. However, this is an early-model release — subsequently superseded by Gemini 3.5 Flash, 3.6 Flash, 3.7 Flash, and 3.8 Flash. AA Intelligence Index 17.9 (non-reasoning) / 26 (reasoning) is very low. AA-Omniscience Hallucination Rate 92.4% is extremely high. CritPt 1.4% is near-zero. JobBench 11.4% is very low. Non-reasoning model per BenchLM. Among the cheapest at $0.50/$3.00 per 1M.
- **Provider / access:** Google AI Studio, Gemini API (`gemini-3-flash-preview`), OpenCode Zen.
- **Release / knowledge:** 2025-12-17 release; knowledge cutoff not precisely documented.
- **IDs:** `opencode/gemini-3-flash` (OpenCode Zen); `gemini-3-flash-preview` (Gemini API).
- **Context window:** 1,000,000 tokens (1M) total.
- **Modalities:** Text, image, audio in; text out.
- **Pricing (as of 2026-10-10):** $0.50/$3.00 per 1M in/out (audio $1/1M). Among the cheapest models in the dataset.

### Raw benchmarks found

Agent / tool use:

- τ²-bench: **43.3%** (AA)
- Claw-Eval: **49.2%** (Claw-Eval leaderboard)
- Gert Labs: **56.63%** (Gert Labs)
- JobBench: **11.4%** (JobBench paper — very low)
- Terminal-Bench 2.1 (Vals): **53.9%** (Vals AI)

Coding:

- LiveCodeBench (Vals): **85.6%** (Vals AI)
- SWE-bench (Vals): **75.0%** (Vals AI)
- SWE-bench Verified: **78%** (Google blog — at launch)
- Vibe Code Bench: **20.20%** (Vals AI — low)

Multimodal:

- AA-MMMU-Pro: **78.6%** (AA)
- Design Arena Website: **1201** (OpenRouter)

Reasoning / knowledge:

- AA-LCR (Long Context Reasoning): **55.3%** (AA — modest)
- CritPt (Physics): **1.4%** (AA — near-zero)
- AA Intelligence Index: **17.9** non-reasoning (AA) / **26** reasoning (AA)
- GPQA Diamond: **81.2%** (AA) / **87.9%** (Vals AI)
- MMLU-Pro: **88.6%** (Vals AI)
- AA Global-MMLU-Lite: **92.7%** (AA — excellent multilingual)
- AA-HLE: **15.0%** (AA — very low)
- AA-Omniscience Index: **-4.3%** (AA — negative)
- AA-Omniscience Accuracy: **45.8%** (AA)
- AA-Omniscience Hallucination Rate: **92.4%** (AA — extremely high)
- AA-IFBench: **55.1%** (AA)
- FrontierMath v2 (Tiers 1-3): **35.64%** (Epoch AI)
- FrontierMath v2 (Tier 4): **4.17%** (Epoch AI — very low)

### Normalized scores (1–100)

- **Tool use: 43/100.** τ²-bench 43.3% is moderate. Claw-Eval 49.2% is moderate. Gert Labs 56.63% is solid. Terminal-Bench 2.1 53.9% is moderate. However, JobBench 11.4% is very low. The tool use profile is moderate across the board with no standout results and one very weak benchmark (JobBench).
- **Reasoning: 40/100.** MMLU-Pro 88.6% is strong. GPQA Diamond 87.9% is strong. AA Global-MMLU-Lite 92.7% is excellent for multilingual. However, AA Intelligence Index 17.9/26 is very low. AA-HLE 15% is very low. CritPt 1.4% is near-zero. AA-Omniscience Index -4.3% is negative. AA-Omniscience Hallucination Rate 92.4% is extremely high — the model hallucinates on most factual queries. FrontierMath v2 Tier 4 4.17% is very low. The reasoning profile is strong on knowledge benchmarks (MMLU-Pro, GPQA) but catastrophically weak on composite intelligence measures and factual reliability.
- **Context window: 65/100.** 1M tokens total. AA-LCR 55.3% is modest for long-context reasoning — significantly behind later Flash models (3.5 Flash 80%, 3.6 Flash 80%, 3.8 Flash higher). The 1M context window is standard, but the long-context reasoning implementation is weak compared to successors.
- **Multimodal: 70/100.** AA-MMMU-Pro 78.6% is solid. Audio input supported alongside text and image. The multimodal capability is adequate but not exceptional for the Flash tier.
- **Coding: 66/100.** LiveCodeBench 85.6% is excellent. SWE-bench (Vals) 75% is solid. SWE-bench Verified 78% was strong at launch. However, Vibe Code Bench 20.2% is low. The coding profile is anchored by strong LiveCodeBench and SWE-bench results but weak on practical coding (Vibe Code Bench).
- **Cost efficiency: 90/100.** $0.50/$3.00 per 1M is among the cheapest in the dataset. Audio input at $1/1M is affordable. For high-frequency interactive workflows where speed matters more than peak intelligence, this is very cost-effective. However, the extremely high hallucination rate (92.4%) may increase costs in practice due to error correction and re-runs.
- **Overall Score: 57/100.** Mean of five quality dims: (43 + 40 + 65 + 70 + 66) / 5 = 56.8. Google's early Flash-tier Gemini 3 model. Key strengths: LiveCodeBench 85.6% (excellent), SWE-bench 75-78% (solid), GPQA Diamond 87.9% (strong), MMLU-Pro 88.6% (strong), AA Global-MMLU-Lite 92.7% (excellent multilingual), 1M context, very cheap ($0.50/$3.00), audio input support. Key weaknesses: AA-Omniscience Hallucination Rate 92.4% (extremely high — model hallucinates on most factual queries), AA Intelligence Index 17.9/26 (very low), CritPt 1.4% (near-zero), JobBench 11.4% (very low), AA-HLE 15% (very low), FrontierMath v2 Tier 4 4.17% (very low), non-reasoning model, superseded by 3.5/3.6/3.7/3.8 Flash. Best fit for: high-frequency interactive workflows where speed is paramount and factual accuracy can be verified externally, multilingual tasks (Global-MMLU-Lite 92.7%), cost-sensitive deployments where $0.50/1M is critical. Not ideal for: any task requiring factual reliability (92.4% hallucination rate), knowledge-intensive workflows, complex reasoning (AA Intelligence Index 17.9), or production agentic coding where later Flash models significantly outperform.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Google official blog, BenchLM, Artificial Analysis, Vals AI, Epoch AI, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
