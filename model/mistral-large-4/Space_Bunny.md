# Mistral Large 4 — findings by Space Bunny

- Source: Mistral (`mistral-large-4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (unofficially "ML4", nicknamed "Le Chonk")
- **Short description:** Mistral's largest and most capable model to date, launched 2026-10-06 in **public API preview** — a 1.05-trillion-parameter natively multimodal MoE with ~52B active parameters. Mistral positions it as state-of-the-art *among open-weight models* on cybersecurity, finance and law, and as the strongest open-weight model from the US or Europe. Top use cases: sovereign/enterprise deployment (EU data residency), document-heavy legal and financial work, and defensive security research that closed models refuse to do.
- **Provider / access:** Mistral Studio / Mistral API (`mistral-large-4`); also OpenRouter (`mistralai/mistral-large-4-0`), Vercel AI Gateway (`mistral/mistral-large-4`), Puter, B.AI. Chat Completions API. **Weights not yet public** — Mistral's Hugging Face page lists `Mistral-Large-4.0-1T05-A52B` as an upcoming release with a **2026-10-31 ETA**; download and license sections still read "Coming soon" as of 2026-10-09. No OpenCode Zen ID found.
- **Release / knowledge:** Announced 2026-10-06. Training data collection date reported as **September 2026** (crawler period through July 2026) per Mistral's public training-content summary. Weights promised end of October 2026.
- **IDs:** `mistral-large-4` (Mistral API), `mistralai/mistral-large-4-0` (OpenRouter)
- **Context window:** **Disputed.** Mistral's official model card advertises **1M tokens**; Vals AI lists 512K; Artificial Analysis and Vercel's live provider table list **524K (524,288)**, and a Frontière AI integration test found 524,288 in the API model-list metadata with an explicit rejection above 262,144 `max_tokens`. Max output listed as 256K (Vals) or 262,144 (provider tests). Scored on the **verified ~524K endpoint limit**, not the 1M card claim.
- **Modalities:** Text and images in → text out (native multimodal, 1.6B-parameter vision encoder). Reasoning: hybrid instruct-and-reasoning, high reasoning effort supported. Tool calls / function calling: yes. Structured outputs, document Q&A, prefix completion, batch, agents: yes. **No** video, file, or audio input; **no** non-text output.
- **Pricing (as of 2026-10-09):** Current **sale** rates **$0.68 in / $0.07 cached / $2.09 out** per 1M, with the crossed-out **original rates $1.36 / $0.14 / $4.18**. Batch −50% ($0.34/$1.045), Priority +75% ($1.19/$3.6575), Regional inference +10% ($0.748/$2.299). The 50% launch discount is reported by Artificial Analysis as lasting two weeks and by Vercel as ending **2026-10-20** — budget the original rates. No Free tier.
- **Architecture:** Granular **mixture-of-experts, 1.05T total / 49B active in experts (52B including embeddings and output layers)**, plus a 1.6B vision encoder — roughly 5% active. Trained from scratch on **3,800 NVIDIA Grace Blackwell GPUs** in Mistral's own European datacenters. Trained on >10T text tokens and 1M–1B images; natively fluent in **160+ languages** including every official EU language. Note: Mistral's current distribution terms for the preview are *proprietary* (SaaS/partner-served, or on-premise under a bespoke self-deployment agreement) — the open-weight license is not yet published.

### Raw benchmarks found

Agent / tool use:

- AutomationBench (657 business workflows across Gmail/Sheets/Slack/Salesforce): **59.9%** (Mistral launch; ahead of Kimi K3, MiMo-V2.6-Pro, DeepSeek V4 Pro)
- AA-Briefcase v1.1: **1,393 Elo** (±10 / +10 CI) — behind Claude Sonnet 5.5 Max (1,823), Claude Haiku 5.5 Max (1,578), GPT-6 Astra Max (1,569), MiMo-V2.6-Pro (1,516), ahead of DeepSeek V4 Pro Max (1,256)
- Artificial Analysis Intelligence Index: **38** (AA, v4.3.2) — described as the strongest open model outside China, behind seven Chinese models
- Finance Agent v2: **54.68%** (#22 of 76) — beats GPT-6 Astra (53.54%) on Vals; behind Gemini 4 Argon 65.40%, Opus 5.5 58.59%, Sonnet 5.5 58.10%, GLM 5.3 55.84%. Reported cost $1.20/test, latency 26m 02s.
- Harvey Legal Agent Benchmark: **15.83%** (#2 of 76) — ahead of Gemini 4 Argon (19.58% is higher; Large 4 is 2nd), ahead of Kimi K3 12.92%, Qwen 3.8 Max 10.42%, GPT-6 Astra 5.42%, Claude Opus 5.5 3.75%. Best open-weight model by a wide margin.
- CyberGym-E2E-AA: **81.7%** pass@1 (Artificial Analysis, highest on its displayed leaderboard; Mistral claims 82%)
- Cybench: **93%** (Mistral, 40-task set)
- Artificial Analysis Cyber Index: **50%** — tied with GLM-5.3-Flash, behind MiMo-V2.6-Pro (56%), ahead of Kimi K3 and DeepSeek V4.1 Flash
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found; **SWE Atlas Codebase QnA: 59.4%** (cited by Mistral from Artificial Analysis)

Reasoning / knowledge:

- AA-LCR v1.1: **81.3%** pass rate — behind Kimi K3 Max 88.7%, MiMo-V2.6-Pro 86.3%, Opus 5.5 Max 84.7%, DeepSeek V4.1 Flash Max 84.0%, GPT-6.1 Sol Max 83.0%, Sonnet 5.5 Max 82.7%; ahead of GPT-6 Astra Max 80.7% by only 0.6 pts
- GPQA Diamond: no verified public score found for this model (Mistral Small 4 has 71.2%; Mistral Large 3 is much lower)
- HLE: no verified public score found
- CritPt / Omniscience / LCR-other: no verified public score found
- GDP.pdf (100 tasks, 4,592 source pages, 1,275 criteria, all-pass): **18.6%** all-pass (Artificial Analysis; vs MiMo-V2.6-Pro 19.2%, GPT-6 Astra Xhigh 32.2%, GPT-6.1 Sol High 32.0%)
- Vals Index v2.1 (broad industry index): **48.05% ±1.11**, #32–33 of 44 — behind Gemini 4 Argon 68.90%, Sonnet 5.5 67.04%, Opus 5.5 66.97%, GPT-6 Astra 63.13%, GPT-6.1 Sol 61.15%, GLM 5.3 53.51%, Kimi K3 50.30%, DeepSeek V4.1 Flash 51.32%. Cost per test **$13.78**, latency **105m 50s**.

Coding:

- DeepSWE v1.1: **61.7%** (Mistral, citing Artificial Analysis)
- Terminal-Bench 4.0: **28.3%** (Artificial Analysis, Mistral-cited) / **22.73%** (Vals, Mini-SWE-agent harness, #21 of 45) — the two harnesses must not be averaged
- SWE-Atlas-QnA: **59.4%** (Mistral/AA)
- Coding Agent Index (mean of DeepSWE / TB4 / SWE-Atlas, equal weight): **49.8%** — ahead of DeepSeek V4 Pro 0813 and Qwen 3.8 Max
- Vibe Code Bench v1.1: **78.40%** (#26 of 110)
- Vibe Code Bench 1–100 (harder version): **14.26%** (#17 of 22)
- Code Migration: **30.56%** (#39 of 75)
- SWE-bench Verified / SWE-bench Pro: no verified public score found for this model
- LiveCodeBench: no verified public score found
- SciCode: **state of the art among open-weight models on SciCode-Verified** (Mistral claim; **no numeric value published**). Note AA has its SciCode dataset under review after an audit — SciCode-Verified must not be equated with AA's current SciCode.
- Blind human coding-quality eval (Surge AI, 1–5 scale): **3.74**, 2nd of 5 — ahead of GLM-5.3 (3.60), Kimi K3 (3.59), GLM-5.2 (3.40), behind Claude Opus 5 (4.22)

Long context:

- AA-LCR v1.1 at **81.3%** is the only measured long-context retrieval evidence (inputs ~100K tokens). No MRCR / RULER / GraphWalks numbers exist. The advertised 1M context is unverified end-to-end — the discrepancy between Mistral's card and every provider/evaluator listing (512K–524K) is unresolved.

Multimodal / grounded:

- Dense200 (visual grounding): **42%** vs GPT-6 Astra 41% (Mistral-reported; one test, no uncertainty estimate)
- GDP.pdf: **18.6%** all-pass (see above)
- ChartQA Pro: no verified public score found
- Mistral's demos (satellite imagery, engineering drawings, PDF evidence retrieval) are qualitative, unbenchmarked

Speed / cost efficiency inputs:

- Output speed: **~116.1 tokens/s** (Artificial Analysis)
- AA Intelligence Index task cost: **$1.13** at launch rates, recalculated to ~$0.57 at the discounted tariff; GLM-5.3-Flash $0.25 and DeepSeek V4.1 Flash $0.27 for comparison
- Vals Index cost per test: **$13.78** at the pre-discount tariff — the single worst cost-per-test figure among the compared models
- Third-party gateway check: 0.56s mean TTFT, 38.7 tok/s (Frontière AI, own hardware/gateway — not comparable to AA)

Safety / robustness (context for enterprise deployment):

- Lakera B3 attack resistance: **93.3%** (Mistral; no higher score among competitors it names)
- KORABench: **1.691 / 2** (Mistral's highest measured among open models)
- Independent email-injection test: **0 of 90 attacks succeeded** vs 57 of 90 for Mistral Medium 3.5 (Krynex Labs, single scenario)
- Refusal caveat: Mistral states Large 4's *cyber refusal rate* is **higher than all open-source models**, despite strong cyber benchmark scores

### Normalized scores (1–100)

- **Tool use: 74/100.** AutomationBench 59.9% and AA-Briefcase 1,393 Elo are respectable enterprise-agent numbers, and CyberGym-E2E at 81.7% is world-leading. Held well below the frontier band by an AA Intelligence Index of only 38, a $13.78 Vals cost per test, and the absence of any published Tau3, GDPval-AA, Terminal-Bench 2.1 or MCP-Atlas number.
- **Reasoning: 72/100.** AA-LCR 81.3% is genuinely strong long-document reasoning. But there is no published GPQA Diamond or HLE score for this model, GDP.pdf all-pass is only 18.6%, and the broad Vals Index places it 32nd of 44 — behind several cheaper open models.
- **Context window: 87/100.** Scored on the **verified 524K endpoint limit** (Vercel live provider table + a provider API check finding 524,288 in model-list metadata), not Mistral's advertised 1M card figure, which no independent source has confirmed. 500K–1M tier with AA-LCR 81.3% as real retrieval evidence at ~100K inputs. The unresolved card-vs-endpoint gap is the cap.
- **Multimodal: 74/100.** Genuinely capable image understanding — Dense200 42% visual grounding, GDP.pdf 18.6%, and native multimodal architecture with a dedicated 1.6B vision encoder. Stays below the 75–90 band because input is text+image only (no video/PDF/audio confirmed) and output is text only.
- **Coding: 66/100.** DeepSWE 61.7% and SWE-Atlas-QnA 59.4% are solid, and the blind Surge AI human eval (3.74, 2nd of 5) shows real code quality. But Terminal-Bench 4 is only 28.3% (AA) or 22.73% (Vals) and Vibe Code Bench 1–100 is just 14.26% — agentic and hard-codebench performance is the clear weakness, and SciCode has no published number.
- **Cost efficiency: 85/100.** The $0.68 / $2.09 sale rate (with $0.07 cached reads) is excellent value on paper and roughly 3.6× cheaper than GPT-6.1 Sol or Sonnet 5.5 per request. Scored below the ~88+ reference tier because the promotion expires 2026-10-20, the steady-state rate is $1.36 / $4.18, Vals measured $13.78 per index test (worst in its comparison table), and there is no Free tier.
- **Overall Score: 75/100.** Best fit: EU-sovereign or self-hosted deployments doing legal, financial, or defensive-security document work where Mistral's willingness to answer (low refusal rate relative to closed models, open weights in flight) matters more than raw frontier capability — but validate against your actual workload, since the broad independent index trails cheaper open models.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research cross-checked across Mistral's official launch post and model card, Mistral's legal training-content and downstream-provider disclosures, Vals AI model profile and benchmark tables, Artificial Analysis (Intelligence Index, AA-Briefcase, AA-LCR, GDP.pdf, CyberGym-E2E, Cyber Index), the Vercel AI Gateway live provider table, a provider API integration report, and independent third-party analyst tracking. Explicitly flagged the unresolved 1M-vs-524K context discrepancy and the Terminal-Bench 4 harness disagreement. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large_5.md`, using the same headings.