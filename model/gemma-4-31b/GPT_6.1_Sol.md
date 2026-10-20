# Gemma 4 31B — findings by GPT 6.1 Sol

- Source: Google DeepMind / `google/gemma-4-31B-it`, dense instruction-tuned checkpoint.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemma 4 31B (instruction-tuned).
- **Short description:** Google's open dense multimodal reasoning model, distinct from Gemma 4 26B-A4B MoE and the encoder-free 12B Unified model. This report assesses the original IT weights, not base weights, fine-tunes or family-wide audio claims.[1][2]
- **Provider / access:** Weights **`google/gemma-4-31B-it`**, supported local Transformers/vLLM/llama.cpp/other runtimes and OpenAI-compatible hosted services. Exact gateway paid `google/gemma-4-31b-it`, **free `google/gemma-4-31b-it:free`**; both identify dated April 2 backend. Native Google AI Studio access independently demonstrated. No separately verified free Zen ID.[1][5][6][7]
- **Release / knowledge:** **2026-04-02** launch; primary card's pretraining data cutoff **January 2025**, not an assurance every post-trained fact has that cutoff.[1][2]
- **Context window:** Config **262,144 shared total**, 256K in publisher prose. Exact free route advertises **262,144/32,768 output**, matching Vals' 32,768 evaluation cap. Paid provider caps vary: CoreWeave **262,144/235,929**, Venice **256,000/8,192**, Chutes **131,072/65,536**, DeepInfra **262,144/16,384** on one route. Very large advertised output caps are serving metadata, not demonstrated complete generations or additive full input/output.[2][3][5][6]
- **Modalities:** Native text/image → text, with **video processed as frame sequences**; card describes up to 60 seconds at 1 FPS. Document/PDF parsing uses visual processing/integration. **No native audio on 31B**: exact config `audio_config:null`; audio belongs to E2B/E4B/12B siblings. No native non-text generation.[2][3]
- **Thinking / tools:** Configurable thinking through the chat template/system token, native system role and function calling. Publisher recommends temperature 1/top-p .95/top-k 64 and retaining reasoning only within appropriate tool-call turns, not all completed prior user turns. Engine/template/quantization fidelity matters.[2]
- **Pricing (2026-10-20):** Verified **Google AI Studio free gateway route: $0 input/$0 output**, 262,144 context and 32,768 output, subject to provider quotas/availability. Paid exact routes include CoreWeave FP4 **$0.10/$0.34 per 1M**, Crusoe BF16 **$0.14/$0.40**, DeepInfra FP8 **$0.16/$0.32** on one route, with different caps/cache rates. Zero AA evaluator prices alone are not proof of free compute; the live exact free-provider record supplies the tariff evidence.[4][5][6]
- **Architecture / licence:** **30.7B dense**, 60 layers, hybrid sliding/global attention, approximately 550M vision encoder, **Apache-2.0** weights. Config explicitly disables MoE, uses 262,144 positions and has no audio component. Local weights have no licence fee, but memory/compute/hosting costs remain; publisher says unquantized weights fit a single 80GB H100.[1][2][3]

### Raw benchmarks found

**Attribution:** Primary README provides IT checkpoint vendor tables. AA selected **Gemma 4 31B (Reasoning)** UUID `cd26a386-4873-46ff-b853-d239050025a2` links exact IT weights and has a measured current index. Vals exact `google/gemma-4-31b-it` uses Google, high reasoning and 32,768 output; backend precision/harness can differ from vendor/local runs.[2][4][8]

Agent / tool use:

- **Tau2 76.9% vendor average over three domains**, **59.94% AA**; **Tau3-Banking 14.85% AA**. Independent values materially constrain the vendor aggregate headline.[2][4]
- **TB2.1 43.45% AA**, **TB2.0 39.33% ± 5.21 Vals**, distinct versions. **TB4 0.0% measured AA**, not null.[4][8]
- **GDPval 619.79 Elo / Briefcase 367.87 Elo**, rubric pass **7.78%**, **AutomationBench 4.93% partial / EnterpriseOps-Gym 28.35% / IFBench 75.58% AA**. Good instruction-following does not establish broad autonomous work completion.[4]
- Vals dated release note **Finance Agent v1.1 50.79% / CorpFin v2 shared-max-context subset 59.67%** are version/subset-labelled. No exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found.[8]

Reasoning / knowledge:

- **GPQA Diamond 84.3% vendor / 85.66% AA**, **HLE 19.5% without tools / 26.5% with search vendor**, **HLE 23.63% AA**. Tool-assisted and unassisted values remain distinct.[2][4]
- Vendor **AIME 2026 89.2% no tools / MMLU Pro 85.2% / BigBench Extra Hard 74.4%**; **CritPt 1.43% AA**.[2][4]
- Vals **SAGE 55.03% ± 3.41, currently #2/91**, versus its historical then-first release position. It supports education/exam tasks rather than frontier-wide agency.[8]
- **AA Intelligence Index 14.669 measured current**, not a launch-era/size-adjusted rating or this source's Overall. Vals current displayed **51.91% aggregate** and dated **38.94% index** are different suite contexts.[4][8]
- **Omniscience accuracy 20.03% / hallucination 84.99% / reliability −47.9333 AA** is a severe calibration weakness despite strong graduate-level multiple-choice QA.[4]

Coding / context / visual:

- Vendor **LiveCodeBench v6 80.0% / Codeforces 2150 Elo**; Elo is not percent success. **SciCode 45.49% AA**.[2][4]
- Vals release note **SWE Verified 53.92% on its index subset**, not a full-500 result; no exact full-set Verified/SWE-Pro/DeepSWE/Vibe result independently verified here. Bounded coding and function support do not imply strong repository autonomy.[8]
- **MRCR v2 eight needles 66.4% at 128K vendor**, **LCR 69.67% AA**. Neither proves near-perfect maximum-window recall; native 262K does not earn a million-token tier.[2][4]
- **MMMU-Pro 76.9% vendor / 73.41% AA**, **MATH-Vision 85.6% vendor**, **GDP.pdf 6.0% all-pass AA / MortgageTax 61.37% ± 0.97 Vals**. Document tasks have very different success criteria.[2][4][8]
- **OmniDocBench 1.5 average edit distance 0.131 vendor, lower is better**. It is not 13.1% accuracy or 86.9% full-document success. No 31B speech result is inherited from siblings.[2]
- Independent launch review observed a broken local 31B GGUF repeatedly emitting separators, then a functioning exact 31B API SVG example. This is evidence of deployment/template sensitivity, **not proof the original BF16 checkpoint is universally broken**. Other-size outputs in that article are not assigned to 31B.[7]
- AA median **35.69 output tokens/s / 1.10 s first chunk**, **48.61M evaluation output/38.97M reasoning tokens**. Vals workload **5 min 30 s** is a different aggregate; full self-host speed/cost depends on hardware and runtime.[4][8]

### Normalized scores (1–100)

- **Tool use: 58/100.** Native functions and bounded Tau/terminal evidence are useful, capped by Tau3 14.85%, TB4 zero and very low professional-work completion.[2][4][8]
- **Reasoning: 76/100.** GPQA, HLE and strong SAGE/vendor mathematics support substantial small-model reasoning, capped by CritPt 1.43% and very poor factual calibration.[2][4][8]
- **Context window: 76/100.** Configured/served 262,144 belongs in the 200K–500K band; MRCR/LCR and smaller routes limit retention claims.[2][3][4][5][6]
- **Multimodal: 82/100.** Native image/frame-video and document vision with measured evidence, capped by no 31B audio/non-text output, limited video duration and poor hard-document all-pass results.[2][3][4]
- **Coding: 69/100.** Strong vendor exercises/SciCode and usable bounded tooling, capped by subset-only repair evidence and weak independent terminal/professional-agent outcomes.[2][4][8]
- **Cost efficiency: 100/100.** Live exact free input/output route meets the methodology's $0 rule; paid route caps, quotas, precision and local compute costs remain separate.[5][6]
- **Overall Score: 72/100.** Half-up mean `(58 + 76 + 76 + 82 + 69) / 5 = 72.2`; cost excluded. Best fit: customizable/local visual reasoning, education and bounded coding, with realistic autonomy and calibration limits.

### Research trail and sources

Fresh Bing RSS `"Gemma 4 31B" official benchmark` returned unrelated business listings; Google `"Gemma 4 31B" independent benchmark review` an interstitial; DuckDuckGo `"Gemma 4 31B" context license pricing` supplied exact weights/providers. Original publisher launch, full exact README/config, selected AA, Vals exact profile, paid/free provider records and a disclosed practical review were compared. Free-cost score is verified from an actual listed free endpoint, not inferred from Apache licensing or evaluator zero prices. No peer findings consulted.

[1]: https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/ "Original April 2 launch, Apache licence, dense identity and deployment resources"
[2]: https://huggingface.co/google/gemma-4-31B-it/raw/main/README.md "Exact primary card, IT benchmarks, sibling/audio distinctions, frame video and settings"
[3]: https://huggingface.co/google/gemma-4-31B-it/raw/main/config.json "Exact 262,144 positions, disabled MoE and absent audio module"
[4]: https://artificialanalysis.ai/models/gemma-4-31b "Exact selected Reasoning record and independent measured metrics/runtime"
[5]: https://openrouter.ai/api/v1/models/google/gemma-4-31b-it/endpoints "Current exact paid routes, precision, caps and tariffs"
[6]: https://openrouter.ai/api/v1/models/google/gemma-4-31b-it:free/endpoints "Current exact Google AI Studio free route, zero prices and 262K/32K caps"
[7]: https://simonwillison.net/2026/Apr/2/gemma-4/ "Independent local GGUF failure versus working exact 31B API output"
[8]: https://www.vals.ai/models/google_gemma-4-31b-it "Independent exact profile, current SAGE/document/terminal and historical subset-labelled repair evidence"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact primary model/configuration and licence checks, directly attributed independent benchmark/provider records and practical deployment review. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
