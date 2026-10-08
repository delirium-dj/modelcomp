# Kimi K2.5 — findings by Claude Opus 5

- Source: Moonshot AI (`moonshotai/Kimi-K2.5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's open-weight, **natively multimodal** trillion-parameter agentic model, built by continuing pretraining on ~15T mixed visual+text tokens on top of `Kimi-K2-Base`. Headline capability is not a benchmark but a paradigm: **Agent Swarm**, where the model self-directs up to **100 sub-agents** across up to **1,500 coordinated tool calls** with no predefined roles, trained via Parallel-Agent Reinforcement Learning (PARL) ([Moonshot tech blog](https://www.kimi.com/blog/kimi-k2-5.html)). Not a variant of another entry; `Kimi K2.5 (Reasoning)` is the thinking-mode sibling, and K2.6 / K2.7 Code / K3 are later models with their own folders.
- **Provider / access:** OpenCode Zen ID `kimi-k2.5`, endpoint `https://opencode.ai/zen/v1/chat/completions` (**Chat Completions**, OpenAI-compatible). Also Kimi.ai, the Kimi App, Moonshot's own API, Kimi Code (open-sourced CLI, image+video input), and NVIDIA NIM (`moonshotai/kimi-k2.5`). Four product modes: K2.5 Instant, K2.5 Thinking, K2.5 Agent, K2.5 Agent Swarm (beta).
- **Release / knowledge:** Released **2026-01-27** ([TechCrunch](https://techcrunch.com/2026/01/27/chinas-moonshot-releases-a-new-open-source-model-kimi-k2-5-and-a-coding-agent/); corroborated by Moonshot's model page via [kimik2ai.com](https://kimik2ai.com/model/) and [llm-stats](https://llm-stats.com/blog/research/kimi-k2-5-launch)). Knowledge cutoff reported as **Oct 2025** ([APXML](https://apxml.com/models/kimi-k25)). **Lifecycle caveat:** OpenCode Zen's own docs list Kimi K2.5 in the deprecation table with a date of **2026-08-05** while still listing it in the live endpoint and pricing tables — a contradiction in Zen's published docs that I am reporting rather than resolving.
- **IDs:** `opencode/kimi-k2.5` (Zen), `moonshotai/Kimi-K2.5` (Hugging Face / NIM). **No Free ID on Zen** — K2.5 is paid there; the open weights are the free-as-in-licence path.
- **Context window:** **256,000 tokens.** Moonshot's own methodology notes state all K2.5 experiments were run "with a context length of 256k tokens", and BenchLM records 256K ([BenchLM](https://benchlm.ai/models/kimi-k2-5)). One third-party spec sheet (APXML) claims 512K and "Text" modality; both of those contradict the vendor blog and are treated as unreliable. Max output: no verified public figure found.
- **Modalities:** **Text + image + video in → text out.** Vision is native, not adapter-bolted: Moonshot states the vision/text trade-off "disappears" at joint-pretraining scale, and K2.5 does video-to-code and autonomous *visual* debugging (inspecting its own rendered output and iterating). No audio input, no generated media. Reasoning: both instant and thinking modes; BenchLM's primary row is the **non-reasoning** variant, which is what most figures below measure. Tool calls: yes, extensively, plus MCP discovery/migration in Kimi Code.
- **Pricing (as of 2026-10-08):** OpenCode Zen — **$0.60 / MTok input, $3.00 / MTok output, $0.10 / MTok cached read** ([Zen pricing](https://opencode.ai/docs/zen/)). Self-hosting is licence-permitted and genuinely viable for data-sovereignty cases. No free tier on Zen.
- **Architecture:** **~1T total parameters, 32B active**, Mixture-of-Experts; continual pretraining of ~15T mixed visual+text tokens on `Kimi-K2-Base`. **Modified MIT License** — commercially usable open weights ([NVIDIA NIM model page](https://docs.api.nvidia.com/nim/reference/moonshotai-kimi-k2-5); [NxCode](https://www.nxcode.io/resources/news/kimi-k2-5-developer-guide-kimi-code-cli-2026)).

### Raw benchmarks found

> Vendor figures come from the [Kimi K2.5 model card](https://huggingface.co/moonshotai/Kimi-K2.5) / tech blog; Moonshot documents its harnesses in detail (Terminus-2 for Terminal-Bench 2.0 in non-thinking mode, an in-house SWE-bench framework, coding scores averaged over 5 runs, AIME/HMMT avg@32, GPQA-D avg@8), which makes them unusually auditable for self-reported numbers.

Agent / tool use:

- τ²-bench: **95.9%** ([Artificial Analysis](https://artificialanalysis.ai/models/kimi-k2-5)); τ³-bench: **65.7%** ([Qwen comparison table](https://qwen.ai/blog?id=qwen3.6))
- DeepSearchQA: **77.1%**; WideResearch: **72.7%**; BrowseComp: **60.6%** (Moonshot model card)
- QwenClawBench: **54.3%**; Claw-Eval: **52.3%** ([Claw-Eval leaderboard](https://claw-eval.github.io/))
- Terminal-Bench 2.0: **50.8%** (Moonshot, Terminus-2 harness, non-thinking mode by Moonshot's own admission — their thinking-mode context management is incompatible with Terminus-2)
- MCP-Tasks: **59.1%**; MCP Atlas: **29.5%**; Toolathlon: **27.8%**
- DeepPlanning: **14.4%**; ResearchClawBench: **14.0%** ([leaderboard](https://internscience.github.io/ResearchClawBench-Home/)); APEX-Agents-AA: **11.5%**; JobBench: **8.7%** ([JobBench paper](https://arxiv.org/abs/2605.26329))
- GDPval-AA: **936 Elo** / **17.2%** normalized (Artificial Analysis) — weak on real professional work
- Gert Labs rankings: **45.88%** ([Gert Labs](https://gertlabs.com/rankings))
- Agent Swarm (vendor-internal, **no absolute score published**): 3×–4.5× reduction in critical steps versus single-agent on wide-search, ~80% end-to-end runtime reduction; counted as architectural evidence, not as a benchmark

Reasoning / knowledge:

- GPQA Diamond: **87.6%** (Moonshot, avg@8); independently **87.9%** (Artificial Analysis) — near-exact agreement
- MMLU-Pro: **87.1%** (Moonshot; independently reproduced at 87.1% in [Arcee's comparison table](https://www.arcee.ai/blog/trinity-large-thinking)); SuperGPQA **69.2%**; MMLU-ProX **82.3%**; NOVA-63 **56.0%**
- HLE: **30.1%** full set (Moonshot); **AA-HLE 30.7%** (Artificial Analysis). Moonshot's own breakdown: **31.5 text / 21.3 image without tools**, **51.8 text / 39.8 image with tools** — the tool-augmented jump is large, and the image split is materially worse than text
- AA-LCR: **78.0%**; LongBench v2: **61%** (Moonshot, inputs standardized to ~128k)
- CritPt: **3.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **23.5**; BenchLM overall **52.08/100, rank #85 of 887** ([BenchLM](https://benchlm.ai/models/kimi-k2-5), 61 of 623 benchmarks — one of the better-covered models in this dataset)
- AA-Omniscience: Index **−7.3**, Accuracy **35.2%**, **Hallucination Rate 65.7%**
- IFEval **93.9%**; AA-IFBench **70.2%**
- AIME 2025 **96.1%** (avg@32), AIME 2026 **95.8%**, HMMT Feb 2025 **95.4%**, Nov 2025 **91.1%**, Feb 2026 **87.1%**, IMO-AnswerBench **81.8%**; FrontierMath v2 Tiers 1–3 **27.9%**, Tier 4 **4.2%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Coding:

- SWE-bench Verified: **76.8%** (Moonshot, in-house framework, avg over 5 runs); **70.8%** when re-evaluated by a third party ([Arcee](https://www.arcee.ai/blog/trinity-large-thinking)) — a 6-point vendor premium worth pricing in
- SWE-bench Pro: **50.7%**; SWE-bench Multilingual: **73%** (Moonshot)
- SWE-Rebench: **58.5%** ([SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025))
- LiveCodeBench v6: **85.0%** (Moonshot)
- React Native Evals: **77.2%** ([rn-evals](https://rn-evals.vercel.app/))
- SciCode: **48.7%** (Moonshot); AA Coding Index: **46.8%** (Artificial Analysis)
- Vibe Code Bench / FrontierCode: no verified public score found

Multimodal:

- Video-MME: **87.4%**; MMVU: **80.4%** (Moonshot blog); VideoMMMU: **86.6%** ([Qwen multimodal table](https://qwen.ai/blog?id=qwen3.6))
- MMMU-Pro: **78.5%** (Moonshot, official protocol, avg@3) vs **AA-MMMU-Pro 75.4%** (Artificial Analysis) — unusually tight agreement for this benchmark
- Design Arena — Website: **1255 Elo** ([OpenRouter](https://openrouter.ai/moonshotai/kimi-k2.5/benchmarks))
- Moonshot also publishes MathVision, OmniDocBench 1.5, LongVideoBench, ZeroBench and its own WorldVQA / PerceptionBench suites, but the aggregator exposed no extractable numeric values for those, so they are not credited

Long context:

- No MRCR / RULER / GraphWalks curve published. Quantified evidence is **AA-LCR 78.0%** (avg@3) and **LongBench v2 61%** at ~128k — i.e. measured at half the stated window, with nothing at all probing the far end of 256K.

### Normalized scores (1–100)

- **Tool use: 71/100.** τ²-bench 95.9% is near-saturated and the search-agent stack is genuinely strong (DeepSearchQA 77.1%, WideResearch 72.7%, BrowseComp 60.6%), and Agent Swarm is a real architectural advantage rather than marketing — PARL with critical-step rewards is a published, specific method. But the dimension is dragged down hard by a consistent cluster of single-digit-to-high-twenties results on *unfamiliar* tool surfaces: JobBench 8.7%, APEX-Agents 11.5%, ResearchClawBench 14.0%, DeepPlanning 14.4%, Toolathlon 27.8%, MCP Atlas 29.5%, and a GDPval-AA of just 936 Elo. It orchestrates its own tools well and generalizes to others poorly.
- **Reasoning: 74/100.** GPQA Diamond 87.6% is one of the few vendor figures in this dataset that an independent harness reproduces almost exactly (87.9%), MMLU-Pro 87.1% likewise, and the competition-math sweep (AIME 2025 96.1%, AIME 2026 95.8%) is top-tier. Capped by HLE at only ~30% (with image HLE 10 points below text HLE), CritPt 3.1%, FrontierMath Tier 4 4.2%, an AA Intelligence Index of 23.5, and a 65.7% hallucination rate against 35.2% accuracy on Omniscience.
- **Context window: 73/100.** 256K is a solid mid-upper window, vendor-stated and aggregator-confirmed, and AA-LCR 78.0% shows real long-context reasoning. Held here because every long-context measurement that exists was taken at **~128k or below** — LongBench v2 was explicitly standardized to ~128k — so the upper half of the advertised window is unevidenced, and because a competing spec sheet claiming 512K shows the public record is not even internally consistent.
- **Multimodal: 84/100.** Genuinely native image **and video** input with excellent numbers: Video-MME 87.4%, VideoMMMU 86.6%, MMVU 80.4%, MMMU-Pro 78.5% (and independently 75.4%, a rare near-match). The vision-to-code and autonomous visual-debugging loop is a capability most multimodal models cannot do at all. Capped by text-only output, no audio modality, and the 10-point text-vs-image gap on HLE showing that visual *reasoning* still lags visual *perception*.
- **Coding: 76/100.** LiveCodeBench v6 85.0%, SWE-bench Verified 76.8%, SWE-bench Multilingual 73%, React Native Evals 77.2% and strong front-end/vision-to-code work make this the model's most immediately useful dimension, and Moonshot documents its harness in enough detail to be auditable. Capped by the third-party SWE-bench re-evaluation landing 6 points lower (70.8%), by SWE-bench Pro 50.7%, SWE-Rebench 58.5%, SciCode 48.7%, and an AA Coding Index of only 46.8%.
- **Cost efficiency: 84/100.** $0.60 in / $3.00 out per MTok on Zen for a 1T-parameter multimodal agentic model is strong value — roughly 1/17th the input price of Claude Fable 5 — and the **Modified MIT** licence makes self-hosting legally unrestricted, which is worth real money for data-sovereignty workloads. Docked for having no free tier on Zen, for 32B active parameters still meaning serious self-host hardware, and for Zen's own docs flagging it deprecated as of 2026-08-05, which caps its remaining useful life on that route.
- **Overall Score: 75.6/100.** Mean of the five non-cost dims (71 + 74 + 73 + 84 + 76) / 5 = 75.6. Best fit: open-weight multimodal coding and research agents — video/image-to-code, visual debugging, wide parallel search via Agent Swarm — where the licence matters and a 256K window suffices. Not the choice for unfamiliar-tool enterprise automation (the MCP/Toolathlon/JobBench cluster is poor) or for work that cannot tolerate a 65.7% hallucination rate.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — Moonshot AI's Kimi K2.5 tech blog (architecture, PARL/Agent Swarm, per-benchmark harness methodology, HLE text/image splits), the OpenCode Zen docs (ID, endpoint, pricing, deprecation table), BenchLM's aggregated K2.5 page, and the underlying Artificial Analysis, Vals-adjacent, Arcee, Epoch AI, SWE-Rebench, Claw-Eval, ResearchClawBench, Gert Labs, rn-evals and OpenRouter leaderboards it cites, plus TechCrunch / NVIDIA NIM / APXML for release date, licence and parameter counts. Where sources conflict (256K vs 512K context; multimodal vs "Text" modality) the vendor's own methodology notes were preferred and the conflict is reported. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
