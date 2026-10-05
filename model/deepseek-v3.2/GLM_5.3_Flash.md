# DeepSeek V3.2 — findings by GLM 5.3 Flash

- Source: DeepSeek (`deepseek-v3.2`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V3.2 (a "Thinking" reasoning variant exists)
- **Short description:** DeepSeek's December 2025 open-weights flagship, the full release of the V3.2-Exp experiment that introduced DeepSeek Sparse Attention (DSA) for cheap long-context processing — 671B-parameter MoE with 37B active, unusually strong agentic coding for its price. Top use cases: cost-efficient agentic coding, math, and open self-hosting.
- **Provider / access:** DeepSeek API; OpenRouter (`deepseek/deepseek-v3.2`, 13 providers); Hugging Face open weights; technical report arXiv Dec 2025 ("DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"). Chat Completions-style API.
- **Release / knowledge:** Full release 2025-12-01/02 (V3.2-Exp experimental: 2025-09); knowledge cutoff not published in the sources reviewed.
- **IDs:** `deepseek/deepseek-v3.2` (OpenRouter); HF DeepSeek-V3.2 collection. No dedicated OpenCode Zen Free ID verified.
- **Context window:** 163,840 tokens (~164K, llm-stats listing) enabled economically by DeepSeek Sparse Attention. Verified how: aggregator listings consistent with the DSA design; no per-benchmark retrieval verification.
- **Modalities:** text in / text out (DeepSeek mainline is text-only; no vision claims in any source reviewed). Reasoning: yes (thinking mode). Tool calls: yes (agentic Terminal-Bench/SWE-bench results). JSON mode not documented here.
- **Pricing (as of 2026-10-05):** ~$0.26 per 1M input / $0.38–0.42 per 1M output (cached input ~$0.13); OpenRouter lists $0.2088/$0.3096. Open weights = free self-hosting.
- **Architecture:** 671B total parameters, 37B active (MoE); DeepSeek Sparse Attention (DSA) for long-context efficiency; open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **~59.3%** (Dec 2025 ThursdAI roundup of the full release — noted as matching Claude Opus 4.5; the Sept V3.2-Exp scored 43.3%)
- SWE-bench Verified (agentic): **~77.2%** (same roundup; V3.2-Exp 67.8%, V3.1-Terminus 68.4% per DeepSeek's GitHub)
- Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~84–85% (thinking mode)**; non-thinking variant **71.2%** (anotherwrapper benchmark comparison)
- AIME 2025: **93.1%** (llm-stats comparison vs GPT-5)
- BenchLM overall: **~50.94/100**, rank #91 of 212 (source-verified position #47 of 74)
- HLE / LCR / MLCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **~77.2%** (see above)
- LiveCodeBench: strong results in the V3.2 technical report; third-party GLM-4.6 comparisons cite V3.2 as a close rival (GLM-4.6 held open-source SOTA at 84.9 on LiveCodeBench v6) — exact V3.2 value not surfaced
- SciCode / AA-SciCode / Vibe Code Bench: no verified public score found

Long context:

- no named long-context retrieval value (MRCR / RULER / GraphWalks) surfaced; DSA targets long-context efficiency rather than measured retrieval here

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 at ~59.3% matching Claude Opus 4.5 is a genuinely strong agentic result; capped by absent Tau2/GDPval/Toolathon data and roundup-level (not primary-report) sourcing for the headline numbers.
- **Reasoning: 80/100.** GPQA ~84–85% thinking and AIME 2025 93.1% are excellent for an open model; capped slightly because non-thinking GPQA is 71.2% and no HLE/LCR corroboration was found.
- **Context window: 62/100.** 164K with DSA is mid-tier by 2026 standards (the V4 family has since moved to 1M); no retrieval benchmark value surfaced.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input in any source reviewed (template floor for text-only).
- **Coding: 84/100.** SWE-bench Verified ~77.2% plus LiveCodeBench strength rivaling GLM-4.6 make this a top open-weights coder for its generation; capped by the unconfirmed exact LCB value.
- **Cost efficiency: 95/100.** $0.21–0.26 in / $0.31–0.42 out per 1M with open weights and cache discounts is near-floor pricing for a 77%-SWE agentic model.
- **Overall Score: 63.4/100.** Mean of the five quality dims (76 + 80 + 62 + 15 + 84) / 5. Best fit: cheap open-weights agentic coding and math; the text-only modality is what holds the overall down.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-10-05
- Method: public internet research (DeepSeek arXiv report, OpenRouter, llm-stats, BenchLM, ThursdAI roundup, anotherwrapper, GitHub release notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
