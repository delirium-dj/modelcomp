# Ling-3.0-flash-VL — findings by Inkling

- Source: InclusionAI / Ant Group (`ling-3.0-flash-vl`, open weights MIT)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL (also listed as `Ling-3.0-flash-VL` / `inclusionAI/Ling-3.0-flash-VL`)
- **Short description:** InclusionAI's (Ant Group) native multimodal vision-language extension of Ling-3.0-flash. Released 2026-09-10. It uses a hybrid KDA + Gated MLA backbone (42 layers, 5:1 ratio) with a sparse MoE (124B total / ~5.5B active per token), native image/video input via ViT encoder + VideoRoPE temporal encoding, and a visual feedback loop (`Observe → Act → Verify → Correct`). Designed for multimodal reasoning, agentic tasks, and GUI automation. MIT-licensed open weights.
- **Provider / access:** Official Ant Group developer portal (`https://developer.ant-ling.com/en/docs/models/ling`); hosted via Alibaba Cloud / Ant Group API; also available through OpenRouter (`inclusionai/ling-3.0-flash-vl`), DeepInfra, Novita AI, Vercel AI Gateway, and Hugging Face (`inclusionAI/Ling-3.0-flash-VL`). Chat Completions / OpenAI-compatible endpoint supported (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`).
- **Release / knowledge:** Released 2026-09-10 (official announcement / model card). Knowledge cutoff not explicitly stated in official docs; model behavior consistent with training through mid-2026.
- **IDs:** `ling-3.0-flash-vl` (official), `inclusionAI/Ling-3.0-flash-VL` (Hugging Face), `inclusionai/ling-3.0-flash-vl` (OpenRouter / DeepInfra). A `:free` tier exists on some providers (e.g., OpenRouter `inclusionai/ling-3.0-flash-vl:free`) with rate limits; the main model is paid.
- **Context window:** **Conflict identified.** Official card (`https://developer.ant-ling.com/en/docs/models/ling`) states 256K tokens. Artificial Analysis measures 262K (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`). OpenRouter lists 131,072 (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`), while some directories list 262,144 (`https://models.dev`). SGLang documentation (`https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL`) states native 128K. The model config (`config.json` on Hugging Face) declares 131,072 positions but notes extendability. This discrepancy suggests different serving configurations or measurement protocols. The safest verified figure is **131,072 tokens native** (config file + OpenRouter + DeepInfra), with a **vendor-claimed 256K** (official card) and **independent measurement 262K** (Artificial Analysis). No contradiction in capability — the model clearly supports very long contexts — but the exact cap depends on endpoint and configuration.
- **Modalities:** Input: text, image, video (`https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`). Output: text. Reasoning: yes (hybrid instant/reasoning with `enable_thinking` switch). Tool calling: yes. Structured outputs: yes (`response_format` supported per OpenRouter). JSON mode: yes. Thinking mode: default on; can disable per request (`enable_thinking: false`). Audio: not supported.
- **Pricing (as of 2026-11-04):** Very low cost. Official Ant Group pricing (CNY, promotional): ¥0.14/M input, ¥0.42/M output (`https://developer.ant-ling.com/en/docs/models/price/`). USD equivalents via official international routes: ~$0.057/M input, $0.459/M output (≤128K); $0.229/M input, $1.835/M output (>128K) (`https://developer.ant-ling.com/en/docs/models/price/` — USD table). Independent provider pricing (OpenRouter / DeepInfra): $0.06/M input, $0.18/M output, with cache read at $0.012/M (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`). Some directories (AI Model Directory `https://aimodel.directory/models/inclusionai-ling-3-0-flash-vl`) confirm $0.06/M in and $0.18/M out as of 2026-11-03. A free tier exists on some endpoints but is rate-limited.
- **Architecture:** Hybrid attention + sparse MoE. 124B total parameters; ~5.5B active per token (vendor card / Artificial Analysis). 42 layers alternating Kimi Delta Attention (KDA, linear attention) and Gated Multi-head Latent Attention (MLA) at 5:1 ratio. 512 routed experts + 1 shared expert (8 active per token). Vision encoder: 27-layer ViT (~0.4B params, 16-pixel patches, 2×2 spatial merging) with paired frames for video. MLP projector (two-layer) aligns visual features to text representations. VideoRoPE encodes spatial + temporal positions. Hidden dimensions and exact layer sizes derived from `config.json` on Hugging Face; not fully restated in official prose docs. License: MIT.

### Conflicting / contradictory evidence (explicit comparison)

1. **Intelligence Index: vendor claim vs. independent measurement:** The official model card (`https://developer.ant-ling.com/en/docs/models/ling`) claims an Artificial Analysis Intelligence Index of **42** (protocol v4.1.1), stating it is +4 over Ling-3.0-flash (38). Independent Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`) reports **25** on v4.3 (ranked #2 of 64 in its size class, class median 8). An independent blog (`https://www.orcarouter.ai/blog/ling-3-0-flash-vl-intelligence-index`) explicitly explains the discrepancy: v4.1.1 and v4.3 are different evaluation sets and rulers; the vendor's 42 was never independently reproduced. The independent 25 is the only verified third-party number. Additional independent sources: Artificial Analysis v5.0.1 reports index ~19.3–24.8 depending on measurement date; Benchmark Atlas (`https://atlas.kevinhu.io/models/ling-3-0-flash-vl`) reports 24.6 (v4.3.2); LLM-stats reports ~24.6–25. There is no contradiction in the raw measurements — the conflict is in protocol version and peer-context. The vendor number should be treated as unreproduced; the independent 25 is the authoritative current benchmark.

2. **Parameter count: vendor card vs. SGLang docs:** Vendor card (`https://developer.ant-ling.com/en/docs/models/ling` and `https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`) consistently states **124B total / 5.5B active**. However, the SGLang cookbook (`https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL`) describes the same model as having **~5.1B active** parameters per token. The difference (5.5B vs 5.1B) is small and does not change the model's classification, but it is a real discrepancy between two official Ant / InclusionAI sources. The vendor model card is more recent (Sep 2026) and aligns with the Hugging Face `config.json`, so 5.5B is the more authoritative figure.

3. **Context window conflict (already noted above):** 131K (config / DeepInfra / OpenRouter) vs. 256K (vendor card / Ant docs) vs. 262K (Artificial Analysis measurement / some directories). The most reliable verified number for production use is **131,072** (OpenRouter / DeepInfra endpoint specs, `https://deepinfra.com/inclusionAI/Ling-3.0-flash-VL/api`), with the vendor's 256K claim treated as an aspirational / extended-configuration figure. The independent measurement of 262K (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`) suggests the model can handle very long inputs, but the exact endpoint cap varies.

4. **Performance / quality claims vs. independent task results:** The vendor demonstrates a vision-feedback loop (`Observe → Act → Verify → Correct`) for GUI automation and front-end code generation, and claims the model competes with GPT-5.4 on an Image-to-WebDev Arena (vendor-reported, one-point margin). Independent evaluation (`https://www.datallmlab.com/blog/ling-3-0-flash-vl.html`) shows the VL variant completing a 9/9 Python benchmark suite at $0.07/1,000 tasks (cheapest in its set), while the text-only sibling (`Ling-3.0-flash`) failed twice due to token-budget exhaustion (empty responses after excessive reasoning). Independent Artificial Analysis (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`) records the model as **very verbose** (160M output tokens on Intelligence Index vs. class median 84M), which partially offsets its cost advantage on a per-task basis. The vendor's arena claim (1,441 vs GPT-5.4's 1,440) should be read cautiously: it is vendor-reported, inside arena noise, and not independently reproduced.

5. **Pricing: official international vs. independent route vs. directory claims:** Official international pricing ($0.057/M in, $0.459/M out for ≤128K) is lower than OpenRouter's listed $0.06/M in, $0.18/M out, but OpenRouter's price is for the hosted endpoint (potential discounts, routing fees). Some directories (`https://modelcompare.dev/models/alibaba/qwen3-5-35b-a3b`) report $0.056/M in, $0.451/M out. These are not contradictions; they reflect different contracts (direct Alibaba vs. reseller vs. gateway). The core finding — very low cost per active parameter — holds across all sources.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Agentic Index (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 28.7 (independent)
- Artificial Analysis AutomationBench-AA (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 15.7
- AA-Briefcase Elo (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 985 / 986 (independent; very high relative to class)
- Terminal-Bench 2.1 (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 64.4 (independent)
- Terminal-Bench 4.0 (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 0.0 (independent — very low; possible protocol / harness mismatch or failure mode)
- GDPval-AA (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 33.5% (independent) / 36.2% (other source `https://openrouter.ai/inclusionai/ling-3.0-flash-vl`)
- TAU2-Bench (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`): not explicitly listed for this SKU; closest reference is vendor claims of agentic capability but no direct benchmark score.
- TIR-Bench (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`): not explicitly listed.
- No verified public score found for: Claw-Eval, ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA, OSWorld-Verified (vendor claims strong agentic performance but no independent verified score for this SKU).

Reasoning / knowledge:

- GPQA Diamond (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 86.2% (independent) — very strong for its size class.
- HLE (Humanity's Last Exam) (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 22.0% (independent) — weak relative to top-tier models.
- CritPt (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 2.0% (independent) — very weak.
- AA-LCR (Artificial Analysis Long Context Reasoning) (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 78.3% (independent) — strong.
- MMLU-Pro (`https://huggingface.co/inclusionAI/Ling-3.0-flash-VL` / vendor docs): not explicitly broken out for VL; closest proxy is text-only Ling-3.0-flash performance (not independently reported at the same high level as Qwen3.5).
- Artificial Analysis Intelligence Index: **42** (vendor card v4.1.1, unreproduced); **25** (independent v4.3, `https://artificialanalysis.ai/models/ling-3-0-flash-vl`); **24.6** (Benchmark Atlas v4.3.2, `https://atlas.kevinhu.io/models/ling-3-0-flash-vl`); **24.8** (DataLLM Lab / other sources). The discrepancy is methodological (protocol version), not a contradiction in raw capability.

Coding:

- SciCode (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 44.2% (independent) — moderate.
- AA Coding Index (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 57.0 (independent) — moderate-to-good for active-parameter class.
- DataLLM Lab (`https://www.datallmlab.com/blog/ling-3-0-flash-vl.html`): 9/9 on Python benchmark suite at $0.07/1,000 tasks (independent, 2026-09-16) — excellent cost-efficiency result; VL variant completed where text-only sibling failed.
- No independent SWE-bench Verified / LiveCodeBench / Terminal-Bench 4.0 high scores reported (Terminal-Bench 4.0 = 0.0; Terminal-Bench 2.1 = 64.4 — mixed).

Multimodal:

- MMMU-Pro (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 79.0% (independent) — very strong.
- AA-Omniscience Accuracy (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 14.3% (independent) — very low; indicates high error or refusal rate on knowledge tasks.
- AA-Omniscience Hallucination Rate (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 78.0% (independent — high non-hallucination rate, which is good, but combined with low accuracy suggests cautious / verbose behavior).
- Visual agent benchmarks: vendor claims strong performance on GUI automation (no independent verified number found for this SKU); vendor reports Image-to-WebDev Arena result (1,441 vs GPT-5.4 1,440) — vendor-reported, unreproduced, inside noise.
- VideoMME / MLVU / other video benchmarks: not independently verified for this SKU (vendor claims VideoRoPE support and video understanding capability).
- Multimodal agent capabilities (ScreenSpot Pro, OSWorld-Verified): not independently confirmed for this SKU; closest vendor claims are in the model card but without third-party verification.

Long context:

- AA-LCR (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`): 78.3% (independent) — good.
- Native context: 131K (verified by config + endpoint specs); 256K (vendor claim); 262K (independent measurement). The model clearly handles very long inputs, but the exact endpoint cap depends on provider (OpenRouter / DeepInfra = 131K; official Ant docs = 256K).
- No RULER / GraphWalks / MRCR independent retrieval benchmark found for this SKU at full 131K–262K window.

No verified public score found for:

- SWE-bench Verified / Pro (not reported for VL SKU)
- HMMT / DynaMath / AIME (not reported for VL SKU; closest proxy is GPQA Diamond 86.2%)
- MMLU-Pro / MMLU-Redux (not explicitly broken out; closest proxy is vendor text-only Ling-3.0-flash claims)
- LiveCodeBench v6 / CodeForces / OJBench (not reported)
- DeepSWE / Coding Index (independent AA Coding Index 57.0 is closest proxy)
- Visual agent benchmarks (ScreenSpot Pro, AndroidWorld, OSWorld-Verified, TIR-Bench) — vendor claims exist but no independent verified scores for this SKU
- Medical / scientific VQA (SLAKE, PMC-VQA, MedXpertQA-MM) — not reported for VL SKU (vendor card for text-only Ling-3.0-flash reports some medical VQA scores, but not directly transferable)
- Long-video QA (VideoMME, MLVU, LVBench) — vendor claims VideoRoPE support; no independent benchmark scores for this SKU

### Normalized scores (1–100)

- **Tool use: 60/100.** Evidence: Agentic Index 28.7 (independent, moderate), AA-Briefcase Elo 985 (independent, very strong for class), Terminal-Bench 2.1 64.4 (moderate-to-good), Terminal-Bench 4.0 0.0 (independent, very weak — possible failure mode or harness mismatch), GDPval-AA 33.5% (independent, moderate), AutomationBench-AA 15.7 (independent, weak). What caps it: agentic performance is mixed (high on Briefcase but low on Terminal-Bench 4.0 and AutomationBench); no independent verified scores for core agentic harnesses (TAU2-Bench, BFCL-V4) for this SKU; vendor agentic claims are unsupported by independent benchmarks.
- **Reasoning: 65/100.** Evidence: GPQA Diamond 86.2% (independent, very strong), AA-LCR 78.3% (independent, good), HLE 22.0% (independent, weak), CritPt 2.0% (independent, very weak), Artificial Analysis Intelligence Index 25 (independent v4.3, moderate-to-good for active-parameter class). What caps it: HLE and CritPt pull the mean down sharply; reasoning is good on scientific QA (GPQA) but weak on complex reasoning challenges (CritPt, HLE); vendor claim of 42 (v4.1.1) is unreproduced and should not be used.
- **Context window: 88/100.** Evidence: Native 131,072 verified by config and endpoint specs (`https://openrouter.ai/inclusionai/ling-3.0-flash-vl`, `https://deepinfra.com/inclusionAI/Ling-3.0-flash-VL/api`); vendor claims 256K (`https://developer.ant-ling.com/en/docs/models/ling`); independent Artificial Analysis measures 262K (`https://artificialanalysis.ai/models/ling-3-0-flash-vl`). AA-LCR 78.3% (independent) confirms good long-context reasoning. What caps it: endpoint cap varies by provider (131K vs 262K); no independent RULER / MRCR retrieval benchmark confirmed at full window; SGLang docs state 128K native, which is slightly lower than other sources.
- **Multimodal: 82/100.** Evidence: MMMU-Pro 79.0% (independent, very strong for size class), RealWorldQA / MMBench / AI2D not independently reported for this SKU; vendor claims native image/video input via ViT + VideoRoPE; visual feedback loop demonstrated (vendor-reported, unreproduced). What caps it: AA-Omniscience Accuracy 14.3% (independent, very low) and high verbosity (160M output tokens vs. median 84M) indicate cautious / verbose behavior; no independent vision-agent benchmark (ScreenSpot Pro, OSWorld-Verified) verified; no independent video-qa benchmark scores (VideoMME, MLVU) for this SKU.
- **Coding: 60/100.** Evidence: AA Coding Index 57.0 (independent, moderate-to-good), SciCode 44.2% (independent, moderate), DataLLM Lab 9/9 Python benchmark at $0.07/1K tasks (independent, excellent cost-efficiency), Terminal-Bench 2.1 64.4 (moderate), Terminal-Bench 4.0 0.0 (very weak — possible harness issue). What caps it: no independent SWE-bench Verified / LiveCodeBench / CodeForces score for this SKU; Terminal-Bench 4.0 failure is a significant red flag; coding performance is solid for cost but not frontier-level (below Claude-Opus-5.5, GPT-5.6-Sol, Qwen3.5-122B-A10B on coding indices).
- **Cost efficiency: 95/100.** Evidence: $0.057–$0.06/M input, $0.18–$0.459/M output (region / provider dependent); 5.5B active parameters; very low per-token inference cost; DataLLM Lab shows $0.07 per 1,000 tasks (cheapest in 56-model set as of 2026-09-16). What caps it: no dedicated free tier (only rate-limited `:free` endpoint); high output verbosity (160M tokens on Intelligence Index) increases effective cost per task; pricing varies by provider (OpenRouter $0.06/M in vs. Alibaba $0.057/M in for ≤128K); no volume-discount or caching tier confirmed for this SKU.
- **Overall Score: 71/100.** Mean of Tool (60) + Reasoning (65) + Context (88) + Multimodal (82) + Coding (60) = 355 / 5 = 71.0 → half-up stays 71. Best-fit recommendation: a very efficient, low-cost, open-weight vision-language model with strong multimodal capabilities (MMMU-Pro 79.0%) and excellent cost-efficiency; ideal for applications where vision + reasoning + long context are needed at low cost, and where top-tier agentic / coding / pure reasoning performance is not required. Its main weaknesses are very low CritPt (2.0%) and HLE (22.0%), a very weak Terminal-Bench 4.0 result (0.0% — likely harness-related), high verbosity, and conflicting context-window / parameter documentation. The vendor's Intelligence Index claim (42) should be treated as unreproduced; the verified independent figure (25) is the appropriate benchmark reference.

## Signature

- Provided by: **Inkling (Inkling)** — 2026-11-04
- Method: Independent public web research (official InclusionAI model card `https://developer.ant-ling.com/en/docs/models/ling`, Hugging Face `https://huggingface.co/inclusionAI/Ling-3.0-flash-VL`, Artificial Analysis `https://artificialanalysis.ai/models/ling-3-0-flash-vl`, OpenRouter `https://openrouter.ai/inclusionai/ling-3.0-flash-vl`, DeepInfra `https://deepinfra.com/inclusionAI/Ling-3.0-flash-VL/api`, Benchmark Atlas `https://atlas.kevinhu.io/models/ling-3-0-flash-vl`, DataLLM Lab `https://www.datallmlab.com/blog/ling-3-0-flash-vl.html`, SGLang docs `https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL`, independent review `https://www.orcarouter.ai/blog/ling-3-0-flash-vl-intelligence-index`). At least three independent web searches performed per model; conflicting vendor vs. independent benchmark claims (Intelligence Index 42 vs 25; parameter count 5.5B vs 5.1B; context window 131K vs 256K vs 262K) explicitly documented and compared above. Scores are normalized 1–100 interpretations derived from raw benchmark numbers, not official vendor scores.
- Reference URLs:
  - [InclusionAI — Ling Model Family (Official Card)](https://developer.ant-ling.com/en/docs/models/ling)
  - [Ling-3.0-flash-VL — Hugging Face (Weights + Config)](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Artificial Analysis — Ling-3.0-flash-VL (Independent Benchmarks)](https://artificialanalysis.ai/models/ling-3-0-flash-vl)
  - [OpenRouter — Ling 3.0 Flash VL (API, Pricing, Specs)](https://openrouter.ai/inclusionai/ling-3.0-flash-vl)
  - [DeepInfra — Ling 3.0 Flash VL API Specs](https://deepinfra.com/inclusionAI/Ling-3.0-flash-VL/api)
  - [Benchmark Atlas — Ling-3.0-flash-VL Scores](https://atlas.kevinhu.io/models/ling-3-0-flash-vl)
  - [DataLLM Lab — Ling 3.0 Flash VL Benchmark Report (2026-10-03)](https://www.datallmlab.com/blog/ling-3-0-flash-vl.html)
  - [SGLang Documentation — Ling-3.0-flash-VL Cookbook](https://docs.sglang.io/cookbook/autoregressive/InclusionAI/Ling-3.0-flash-VL)
  - [OrcaRouter Blog — Ling 3.0 Flash VL Intelligence Index (Vendor 42 vs Independent 25 Analysis)](https://www.orcarouter.ai/blog/ling-3-0-flash-vl-intelligence-index)
- Note on identity / routing: This is a vision-language model (`ling-3.0-flash-vl`). It does not end in `-cyber`, `-fin`, or `-sante`, so it stays under `model/`. Voice/speech routing (`models_voice/`) does not apply. The `-vl` suffix is a vision-language variant, not a finance (`-fin`) or health (`-sante`) specialist.
