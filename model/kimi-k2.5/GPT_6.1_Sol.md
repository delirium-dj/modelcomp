# Kimi K2.5 — findings by GPT 6.1 Sol

- Source: Moonshot AI / `moonshotai/Kimi-K2.5`, with Thinking, Instant and Swarm results separated.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Kimi K2.5.
- **Short description:** Moonshot's original native multimodal K2 generation, adding visual inputs through continued training atop K2-Base. Instant, thinking and orchestrated swarm workflows are separate operating setups; a swarm result is not an ordinary model-call success rate.[1]
- **Provider / access:** Open weights `moonshotai/Kimi-K2.5`; publisher card documents native historical `kimi-k2.5` through OpenAI/Anthropic-compatible APIs and self-hosted vLLM/SGLang. Current exact gateway `moonshotai/kimi-k2.5`, snapshot `moonshotai/kimi-k2.5-0127`, lists third-party/Bedrock providers. The old native quickstart URL now redirects to generic K3 documentation: current first-party K2.5 invocation is **not verified** by that redirect, nor is it proof of automatic successor routing.[1][3][5]
- **Release / knowledge:** **2026-01-27**, verified AA and contemporary independent review; card records **January 29 chat-template corrections**, removing a confusing default system prompt and fixing a media token. No verified exact knowledge cutoff found.[1][2][4]
- **Context window:** **262,144 shared total**, rounded 256K. Current AtlasCloud/SiliconFlow routes advertise **235,929 output**, Bedrock **131,072**, Venice **256,000 total/65,536 output**. These are route-specific advertised ceilings, not a universal output allowance or additive full input plus output.[1][3]
- **Modalities:** Native text/image → text, with **experimental video input on official API** according to publisher; third-party vLLM/SGLang video support is not established by the card. Current gateway advertises text/image only. Documents/OCR use visual content; no raw PDF, audio or non-text generation is inferred.[1][3]
- **Reasoning / tools:** Thinking and Instant modes supported; official API uses `thinking.type:disabled` for Instant, self-host template uses its own `thinking:false`. Publisher recommends temperature **1 thinking/.6 Instant**, top-p .95. Tool calling and interleaved reasoning require correct framework integration. Swarm orchestration adds multiple agents/tool budgets beyond a single API request.[1]
- **Pricing (2026-10-20):** Current exact gateway per-million AtlasCloud **$0.49 input/$2.50 output/$0.20 cache read**, SiliconFlow **$0.50/$2.50/$0.15**, Novita **$0.57/$2.85/$0.095**, Bedrock **$0.60/$3.00**. AA records **$0.60/$3.00/$0.10 hit** as its evaluation assumption; not a verified current native rate. Subscriptions/open weights do not establish free API access; no free Zen route verified.[2][3]
- **Architecture / licence:** **1T total/32B active MoE**, 61 layers, MLA, 384 experts/8 selected plus one shared, **400M MoonViT**, native INT4. **Modified MIT**, including prominent Kimi attribution for commercial products exceeding **100M monthly active users or $20M monthly revenue**. Self-host resources are not costless.[1][6]

### Raw benchmarks found

**Critical settings:** Publisher generally uses thinking, temperature 1/top-p .95/256K, but explicitly evaluates **TB2.0 in non-thinking mode**, and reports that its best **SWE-bench series scores also use non-thinking** in an internal tool harness. Reasoning/vision averages over multiple trials estimate mean performance; they are not majority-vote pass@32. AA selected exact record is **Kimi K2.5 (Reasoning)**, UUID `a550ffca-f89e-4381-ade6-a85dc6a1fb4c`, estimated current index.[1][2]

Agent / tool use:

- **TB2.0 50.8% vendor non-thinking, Terminus-2**, versus **TB2.1 45.69% AA Reasoning**, distinct versions/settings. AA TB4/science are null, not zeros.[1][2]
- **Tau2 95.91% / Tau3-Banking 14.23% / GDPval 839.49 Elo / Apex Agents 11.50% / IFBench 70.20% AA**. Excellent older customer-service scores do not establish reliable harder banking/professional work.[2]
- **BrowseComp 60.6% plain / 74.9% context-managed / 78.4% Swarm vendor**; WideSearch **72.7 item-F1 / 79.0 Swarm item-F1**, not percentage of complete tasks solved. Swarm main/subagent step budgets differ and must remain labelled.[1]
- **HLE with tools 50.2% full set vendor**, versus unassisted full **30.1%**; publisher text/image subsets **51.8/39.8 with tools**, **31.5/21.3 without**. Search/code/browsing and context management materially change the task.[1]
- No verified exact Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found; successor K2.6/K2.7 scores are not inherited.

Reasoning / knowledge:

- **GPQA Diamond 87.6% vendor, avg@8**, **87.88% AA**. **HLE 30.72% AA** broadly agrees with vendor full-set 30.1 but is not its tool-enabled 50.2.[1][2]
- Vendor **AIME 2025 96.1% / HMMT February 2025 95.4%**, both avg@32 with 96K completion budget; **IMO-AnswerBench 81.8% / MMLU-Pro 87.1%**. Trial averaging is not best-of-32 selection.[1]
- **CritPt 3.14% AA**; **AA Intelligence Index 23.459 explicitly estimated**. No measured complete current composite is claimed.[2]
- **Omniscience accuracy 35.22% / hallucination 65.68% / reliability −7.3333 AA** constrain specialist factual reliability.[2]

Coding:

- Vendor **SWE Verified 76.8% / SWE-Pro 50.7% / Multilingual 73.0%**, internal minimal bash/file-edit harness, five independent runs, best non-thinking setup. These are not independent thinking-mode reproductions.[1]
- Vendor **LiveCodeBench v6 85.0% / SciCode 48.7% / PaperBench 63.5% / CyberGym 41.3%**. Selected AA LCB/SciCode fields are null; no separate exact Vibe/DeepSWE result verified.[1][2]
- Simon Willison's independent January 27 examples produce a plausible ten-task/dependency plan for a Datasette/S3 plugin and a recognizable SVG. They are disclosed individual outputs, **not execution of ten parallel coding agents** or a controlled benchmark win. Quoted “up to 100 subagents/1500 calls/4.5×” remains a vendor swarm claim.[4]

Long context / vision / runtime:

- **LongBench v2 61.0% vendor**, prompts standardized to about **128K**, not the full 256K; **LCR 70.0% vendor / 78.0% AA**. No independently verified near-perfect maximum-window MRCR/RULER found.[1][2]
- Vendor **MMMU-Pro 78.5%**, versus **75.38% AA**; **MathVision 84.2% / CharXiv RQ 77.5% / OCRBench 92.3%**.[1][2]
- Vendor **OmniDocBench 1.5 88.8** is `(1 − normalized Levenshtein distance) × 100`, not entire-document task success. **VideoMMMU 86.6% / VideoMME 87.4% / LongVideoBench 79.8%** are vendor visual/video results, not audio coverage.[1]
- AA median **78.33 output tokens/s / 1.88 s first chunk**; first chunk is not completed reasoning/answer latency. No current measured full-index cost is provided in the selected estimated-index record.[2]

### Normalized scores (1–100)

- **Tool use: 69/100.** Strong Tau2 and useful bounded terminal/search behavior, capped by Tau3 14.23%, GDPval 839.49 and swarm/harness dependence.[1][2]
- **Reasoning: 79/100.** Consistent independent GPQA/HLE and strong vendor averaged mathematics, capped by CritPt 3.14%, estimated current composite and negative factual reliability.[1][2]
- **Context window: 76/100.** Verified 262K capacity and useful LCR, without maximum-window near-perfect retrieval or million-token support.[1][2][3]
- **Multimodal: 85/100.** Native visual/document and official experimental-video coverage with substantial exact-model results, capped by gateway restrictions, no audio/non-text generation and vendor-heavy video evidence.[1][2][3]
- **Coding: 79/100.** Strong vendor SWE/exercise results and practical planning evidence support bounded engineering, capped by non-thinking custom-harness attribution and limited current independent repair replication.[1][2][4]
- **Cost efficiency: 88/100.** Low paid hosted tariffs and cached routes offer good value, capped by provider/output/vision differences, legacy native-access uncertainty and self-host resources.[1][2][3]
- **Overall Score: 78/100.** Half-up mean `(69 + 79 + 76 + 85 + 79) / 5 = 77.6`; cost excluded. Best fit: open-weight visual reasoning and bounded coding on an exact legacy route, with Instant/Thinking/Swarm settings kept distinct.

### Research trail and sources

Fresh Bing RSS `"Kimi K2.5" official benchmarks` returned unrelated social-media articles; Google `"Kimi K2.5" independent benchmark review` an interstitial; DuckDuckGo `"Kimi K2.5" context pricing review` a bot challenge. Direct exact weights/full tables/footnotes, licence, AA reasoning record, live provider metadata and contemporary independent review supplied evidence. Guessed Vals `kimi_kimi-k2.5` and `moonshotai_kimi-k2.5` returned 404; no score or nonexistence inference follows. Old native quickstart now redirects, so current native availability is qualified rather than assumed. No peer findings consulted.

[1]: https://huggingface.co/moonshotai/Kimi-K2.5/raw/main/README.md "Exact original weights, full benchmarks/footnotes, non-thinking coding exceptions, multimodal inputs and template changes"
[2]: https://artificialanalysis.ai/models/kimi-k2-5 "Exact selected Reasoning record, estimated-index flag, independent metrics and runtime"
[3]: https://openrouter.ai/api/v1/models/moonshotai/kimi-k2.5/endpoints "Current exact 0127 provider routes, prices, modalities and output caps"
[4]: https://simonwillison.net/2026/Jan/27/kimi-k25/ "Contemporary independent actual SVG/planning examples versus quoted vendor swarm claims"
[5]: https://platform.kimi.ai/docs/guide/kimi-k2-5-quickstart "Legacy URL redirects to generic successor quickstart; not proof of current K2.5 invocation"
[6]: https://huggingface.co/moonshotai/Kimi-K2.5/raw/main/LICENSE "Modified MIT with monthly-user/revenue attribution condition"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact primary model/footnote/licence inspection, selected independent evaluator record, current provider checks and disclosed practical review. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
