Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24

# GPT-6 Astra — findings by Qwen 3.8 27B

- Source: OpenAI/GPT-6 Astra
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's GPT-6 family flagship — a 1M-context, reasoning-native model with a strong agentic computer-use and coding positioning; sibling GPT-6 Sol and GPT-6 Luna were added in a 2026-09-22 update (separate entries, not aliases of this one).
- **Provider / access:** OpenAI first-party (OpenAI API, API ID `gpt-6-astra`; also Microsoft Azure and AWS Bedrock per the launch page) plus ChatGPT (Plus/Pro/Business/Enterprise). Not listed on OpenCode Zen; **no Free ID exists on Zen** — this is a paid API model.
- **Release / knowledge:** limited preview to a select set of organizations in early September 2026 (Wikipedia dates the preview 2026-09-03); full rollout followed "over the coming days" per the launch page; 2026-09-22 launch update expands the family with GPT-6 Sol and GPT-6 Luna. Knowledge cutoff 2026-04-30 (Artificial Analysis).
- **IDs:** `gpt-6-astra` (OpenAI first-party API ID, confirmed by the launch page and the OpenAI API model reference[^4]). No Free ID on Zen.
- **Context window:** 1M tokens total (OpenAI launch page; Artificial Analysis; BenchLM reports 1.05M). Max output: not verified in the sources captured.
- **Modalities:** text + image in; text out. Reasoning: yes (`reasoning.effort` = low/medium/high; no "none" option). Tool calls: yes (Terminal-Bench, BrowseComp, OSWorld 2.0, Tau3-Banking results; GUI computer use). JSON mode: not verified.
- **Pricing (as of 2026-09-24):** OpenAI standard $10.00 in / $50.00 out per 1M (launch page). Fast mode: 2× standard rates at ~2× speed. Prompts >272K input tokens: 2× input and cache rates + 1.5× output for the full request. Cache writes billed at 1.25× the uncached input rate; AA reports a 90% cache discount on cache hits (≈$1.00/M). Batch / Flex: 50% of standard. $3.26 per Artificial Analysis Intelligence Index task. Paid only — no free tier.
- **Architecture:** proprietary (OpenAI). Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **87.30%** (BenchLM)
- Tau3-Banking: **41.40%** (BenchLM; Artificial Analysis lists 41.4% as well)
- GDPval-AA: **Elo 1542** (BenchLM; 52.1% normalized)
- BrowseComp: **91.50%** (BenchLM; matches the OpenAI launch claim)
- OSWorld 2.0: **72.60%** (BenchLM; OpenAI launch)
- Terminal-Bench 4.0: **57.90%** (BenchLM)
- Terminal-Bench-Science 0.1: **64.60%** (BenchLM)
- ExploitBench: **100%** (OpenAI launch claim) — different harness from ExploitGym **42.40%** (BenchLM); not directly comparable
- Agents' Last Exam: **59.30%** (BenchLM; OpenAI launch)
- AutomationBench: **41.40%** (OpenAI launch; BenchLM lists 41.4%); AA AutomationBench 68.5% (BenchLM/AA harness)
- HLE w/ tools: **57.20%** (BenchLM; agentic variant)
- GDP.pdf: **31.00%** (BenchLM)
- AA Briefcase Elo: **1569** (BenchLM); AA AnalystAgent 51.2%; AA Agentic Index 51.5%; ApprenticeBench 68.0% (BenchLM)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.00%** (BenchLM GPQA-D; AA-GPQA Diamond 96.1%)
- HLE: **54.70%** (AA-HLE via BenchLM; text, no tools)
- LCR / MLCR: **AA-LCR 80.70% / MLCR-AA 35.00%** (BenchLM)
- CritPt: **31.70%** (BenchLM)
- ARC-AGI: AGI-1 **98.50%**, AGI-2 **95.00%**, AGI-3 **62.70%** (BenchLM) — note: the OpenAI launch page claims ARC-AGI-3 99.9%; the large vendor-vs-independent-harness gap is flagged[^2][^1]
- FrontierMath v2 (Tier 4): **97.60%** (BenchLM; OpenAI launch cites 98% and calls the benchmark saturated)
- Artificial Analysis Intelligence Index: **61.2 (v4.1.1, as cited by the OpenAI launch)** / **53 at #6 of 210 (current AA page)**[^3] — index revised down since launch
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (BenchLM AA-Omniscience)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (not listed on the BenchLM page)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **56.50%** (BenchLM AA-SciCode)
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **74.10%** (BenchLM)
- Coding Index: **AA Coding Index 76.9** (BenchLM)
- FrontierSWE v2: **65.50%** (BenchLM); FrontierCode 1.1 Main **53.30%** / Extended **64.50%** (BenchLM)
- Terminal-Bench 2.1: **87.30%** (agentic terminal coding, as above)

Long context:

- MRCR v2: **100.00% at 256K–512K; 96.30% at 512K–1M** (BenchLM); RULER / GraphWalks: no long-context retrieval beyond MRCR reported.

Speed / cost extras:

- Output speed **51.3 tok/s** (#133 of 210) (Artificial Analysis)[^3]
- $3.26 per AA Intelligence Index task; **60M** output tokens of verbosity (#36 of 210) (AA)[^3]
- 90% cache discount (AA)[^3]

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.1 (Vals) 87.3% meets the ~85% frontier ref and BrowseComp 91.5% / OSWorld 2.0 72.6% are top-tier; capped just under the top because Tau3-Banking 41.4% and GDP.pdf 31.0% are weak, GDPval-AA Elo 1542 sits between the mid (900–1200) and the frontier (~1750) band, and automation-style agentic (AutomationBench 41.4%) trails the current best.
- **Reasoning: 95/100.** GPQA Diamond 96.0%, HLE 54.7% (≥40% frontier ref met), ARC-AGI-2 95.0%, FrontierMath Tier 4 97.6%, and MRCR 512K–1M 96.3% all meet or clear frontier refs, and the AA Index ranks #6 of 210; held below 100 by CritPt 31.7%, MLCR-AA 35.0%, and the ARC-AGI-3 vendor/independent gap (99.9% claimed vs 62.7% on BenchLM).
- **Context window: 97/100.** Verified 1M window (OpenAI launch page, AA, BenchLM 1.05M) sits in the ≥1M = 95–100 tier; MRCR v2 100% at 256K–512K and 96.3% at 512K–1M is just under the ≥98% retrieval gate for a 1M ceiling, so it is held at 97.
- **Multimodal: 69/100.** Verified text + image in, text out → 60–70 text+image band; ScreenSpot Pro 92.7% and BenchCAD 95.9% (launch; w/ tools on BenchLM) plus AA-MMMU-Pro 86.9% push it toward the top of the band, and the absence of any verified audio/video input keeps it inside the band.
- **Coding: 94/100.** All four rubric frontier refs met: DeepSWE 74.1% (≥74), Terminal-Bench 2.1 87.3% (≥85), AA-SciCode 56.5% (≥55), and AA Coding Index 76.9 (≥70); held below 100 by FrontierCode 1.1 Main 53.3%, FrontierSWE v2 65.5%, and no verified SWE-bench Verified number.
- **Cost efficiency: 30/100.** Paid only: $10.00/$50.00 per 1M standard, Fast mode 2×, >272K surcharge (2× input/cache + 1.5× output), cache writes at 1.25× — flagship-tier pricing well above the ~$3/$15 ≈ 60 anchor.
- **Overall Score: 89/100.** (90 + 95 + 97 + 69 + 94) / 5 = 89 — best-fit: the tracker's top-ranked model on BenchLM overall (#1 of 507, 88.47/100) for frontier reasoning, agentic browsing/computer use, and 1M-context work where the $10/$50 rate and 272K surcharge are acceptable; its multimodal reach is text+image only, and operations-style tool loops (Tau3-Banking 41.4%, GDP.pdf 31.0%) lag the current best.

---

## Signature

- Provided by: **Qwen 3.8 27B (cerebras/qwen-3.8-27b)** — 2026-09-24
- Method: public internet research (OpenAI launch page, OpenAI API model reference, BenchLM model page, Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

[^1]: OpenAI, "GPT-6 Astra" — launch announcement page (benchmarks, pricing, surcharge tiers, availability, 2026-09-22 family update) — https://openai.com/index/gpt-6-astra/
[^2]: BenchLM, "GPT-6 Astra" model page — overall 88.47/100, #1 of 507, 61/482 benchmarks (per-benchmark rows) — https://benchlm.ai/models/gpt-6-astra
[^3]: Artificial Analysis, "GPT-6 Astra" model page — Intelligence Index (61.2 v4.1.1 at launch; 53 #6/210 on the current page), speed 51.3 tok/s, $10/$50, 90% cache discount, $3.26/task, 60M verbosity, knowledge cutoff 2026-04-30 — https://artificialanalysis.ai/models/gpt-6-astra
[^4]: OpenAI API docs, GPT-6 Astra model reference (API ID and pricing-tier confirmation) — https://developers.openai.com/api/docs/models/gpt-6-astra