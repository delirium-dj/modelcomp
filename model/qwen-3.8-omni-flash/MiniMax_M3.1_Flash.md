# Qwen 3.8 Omni Flash — findings by MiniMax M3.1 Flash

- Source: Alibaba Cloud Model Studio / Qwen3.8-Omni-Flash (`qwen3.8-omni-flash`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's hosted omni-modal "Flash" tier model, released 2026-09-18, that ingests text, image, audio and video and answers in text with reasoning enabled by default. It is a sparse MoE that inherits the Qwen3.8-Next recipe, aimed at long-horizon multimodal agents and media-production pipelines.
- **Provider / access:** Alibaba Cloud Model Studio (Qwen Cloud) API, model id `qwen3.8-omni-flash`, via OpenAI-compatible Chat Completions and Responses endpoints; also distributed as `qwen/qwen-3.8-omni-flash` by OpenRouter and other aggregators. No OpenCode Zen route exists for this id as of 2026-11-12.
- **Release / knowledge:** Released 2026-09-18 (vendor launch post; BenchmarkList records the same date); no knowledge-cutoff date is published.
- **IDs:** `qwen3.8-omni-flash` (Model Studio), `qwen/qwen-3.8-omni-flash` (OpenRouter and aggregators). No Free tier and no OpenCode Zen id.
- **Context window:** 1,000,000 tokens total; maximum input 991,808 tokens in non-thinking mode and 983,616 tokens in thinking mode; maximum output 131,072 tokens (official Model Studio model info page, last updated 2026-11-06).
- **Modalities:** Text, image, audio and video in; text out; reasoning yes (on by default with adjustable reasoning effort); function calling with custom tools; web search through the built-in Responses `web_search` tool; JSON mode; implicit and session context caching; multichannel spatial-audio input via `use_multichannel`; 113 audio input languages and dialects.
- **Pricing (as of 2026-11-12):** International $0.15 input / $0.016 cache-hit read / $0.47 output per 1M tokens; the Chinese-mainland and global deployments (Singapore, Tokyo, Frankfurt, Virginia) list $0.113 / $0.014 / $0.382 (official Model Studio billing tables). Paid endpoint, no permanent free lane.
- **Architecture:** Proprietary hosted sparse mixture-of-experts inherited from Qwen3.8-Next (technical report arXiv 2609.25611); parameter counts are not published and no weights are downloadable.

### Raw benchmarks found

Agent / tool use:

- AndroidWorld: **87.1%** success rate pass@1 (vendor launch post; BenchmarkList rank 5 of 22, 81st percentile)
- OmniGAIA: **74.0%** (vendor launch post; BenchmarkList rank 2 of 15, 93rd percentile)
- ClawEval-MM: **60.4%** (vendor comparison table; BenchmarkList rank 6 of 12, 55th percentile)
- Vision2Web: **62.9%** (vendor launch post; BenchmarkList rank 6 of 9, 38th percentile)
- ERQA: **71.0%** (vendor launch post; BenchmarkList rank 4 of 20, 84th percentile)
- CoWorkBench: **75.3%** (vendor launch post only)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval (text variant) / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.0%** (vendor launch post; BenchmarkList rank 36 of 481, 93rd percentile)
- Humanity's Last Exam: **36.5%** (vendor launch post; BenchmarkList rank 62 of 491, 88th percentile)
- MathVision: **91.8%** fixed-prompt, 96.2% with Python execution (vendor; BenchmarkList rank 9 of 174, 95th percentile)
- ObviousBench: **98.6%** answer pass rate (vendor table reproduced by BenchmarkList; rank 55 of 275, 80th percentile)
- IFBench: **81.5%** (vendor; BenchmarkList rank 7 of 50, 88th percentile)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (Artificial Analysis lists no model page for this id as of 2026-11-12)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench v6: **92.6%** pass@1 (vendor; BenchmarkList rank 3 of 55, 96th percentile)
- SWE-bench Multilingual: **80.5%** resolved (vendor; rank 10 of 56, 84th percentile)
- SWE-bench Pro: **63.3%** (vendor; rank 18 of 62, 72nd percentile)
- NL2Repo: **48.9%** (vendor; rank 16 of 36, 57th percentile)
- DeepSWE 1.1: **57.8%** pass@1 (vendor, mini-SWE-agent harness; rank 40 of 63, 37th percentile)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval-at-length number is published. The technical report (arXiv 2609.25611) describes 256K-native pretraining extended to a 1M window in post-training but reports no retrieval benchmark at 512K or 1M, so retrieval quality at the advertised window is unverified.

Multimodal (vendor launch post unless noted):

- LVBench: **76.9%** (BenchmarkList rank 11 of 49, 79th percentile)
- RealWorldQA: **87.7%** (BenchmarkList rank 2 of 31, 97th percentile)
- CharXiv-R: **83.5%** without tools, 91.4% with Python execution (BenchmarkList rank 24 of 46, 49th percentile)
- AgenticVBench: **36.8%** (BenchmarkList rank 2 of 11, 90th percentile)
- VoiceBench: **91.6%** (BenchmarkList rank 4 of 47, 93rd percentile)
- WildClawBench-MM: **71.0%** (vendor launch post only)
- UniClawBench: **69.6%** (vendor launch post only)
- OmniVideoBench: **63.4%** static, 67.8% under Qwen Code (vendor launch post only)
- StreamingBench: **80.8%** (vendor launch post only)
- AliMeeting: **3.35** DER and **17.18%** cpWER (vendor launch post only)
- MuchoMusic-RUL: **72.6%** (vendor launch post only)

### Normalized scores (1–100)

- **Tool use: 80/100.** AndroidWorld 87.1 (rank 5 of 22), OmniGAIA 74.0 (rank 2 of 15), Vision2Web 62.9 and ClawEval-MM 60.4 (rank 6 of 12) show real device and computer-use agency, but no Terminal-Bench 2.1, Tau3, GDPval or text Claw-Eval score was published and the ranks are mid-field rather than dominant, so 80 is the cap.
- **Reasoning: 87/100.** GPQA Diamond 91.0 (93rd percentile, 36 of 481) and MathVision 91.8 place it in the frontier band on hard knowledge; HLE 36.5 and the absence of any published MRCR/LCR retrieval result keep it below the 90-100 reference band.
- **Context window: 95/100.** The 1M-token window sits in the top tier, but the 991,808-token input limit and the lack of any MRCR/RULER retrieval-at-512K-plus result mean the 98%-retrieval bonus cannot be claimed.
- **Multimodal: 93/100.** Text, image, audio and video input with text output covers the widest input band, backed by VoiceBench 91.6, RealWorldQA 87.7 and LVBench 76.9; the weak AgenticVBench 36.8 and the absence of native non-text output keep it off the ceiling.
- **Coding: 78/100.** LiveCodeBench v6 92.6 (rank 3 of 55), SWE-bench Multilingual 80.5, SWE-bench Pro 63.3 and DeepSWE 57.8 are strong, but NL2Repo 48.9 and the missing SciCode and Vibe Code Bench results cap it in the high band.
- **Cost efficiency: 97/100.** $0.15 input, $0.47 output and $0.016 cache-hit read per 1M on the international endpoint sit at the cheap end of the paid ladder ($0.113 / $0.382 in the global regions); it is a paid endpoint with no free lane.
- **Overall Score: 86.6/100.** Mean of the five quality dimensions (80 + 87 + 95 + 93 + 78) / 5; best fit is a high-throughput omnimodal workhorse for media and document agents, not a replacement for a frontier reasoning model.

### Conflicting evidence (vendor vs independent) and how it was resolved

- Every benchmark number except the rank columns is vendor-reported from the launch post, and BenchmarkList warns that many rows rely on Qwen-chosen harnesses, in-house tasks or corrected benchmark sets, with the public AgenticVBench, OmniGAIA and VoiceBench leaderboards not listing the model as of early October 2026. Resolution: raw values are reported as vendor claims, the independent rank positions are used to temper the reasoning and tool scores, and no score is pushed into the vendor-implied frontier band.
- Vendor strength and independent position diverge most on software engineering: LiveCodeBench 92.6 is 3rd of 55 while DeepSWE 1.1 57.8 is only 40th of 63 and the tracker records large deficits against rival models on that benchmark. Resolution: coding is scored at 78 rather than the 88-plus the headline LiveCodeBench number would justify.
- OpenRouter lists the same id at 1,000,000 context and $0.15 / $0.47 per 1M, matching the official Model Studio billing table, while the Chinese-mainland and global regional tables list $0.113 / $0.382. Resolution: the international price is used for the scored tier and the cheaper regional price is noted as a deployment option.

### Notes on identity

- `qwen3.8-omni-flash` is a distinct hosted model id, not an alias of `qwen3.8-flash`, `qwen3.8-max` or the `qwen3.8-omni-flash-realtime` sibling (which bills at $0.23 / $0.93 with separate audio rates).
- The repo meta id `qwen/qwen-3.8-omni-flash` matches the OpenRouter canonical id; the vendor spells the same model `qwen3.8-omni-flash`.
- No weights were published, so this entry cannot be merged with any open-weight Qwen3.8 checkpoint, and it is not the voice-routed realtime sibling.
- No OpenCode Zen route exists for this model as of 2026-11-12 (the Zen list carries qwen3.8-max, qwen3.8-flash, qwen3.6-plus and qwen3.5-plus only), so this report scores the Model Studio paid tier.

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-11-12
- Method: public internet research (official Model Studio model info and billing documentation, the vendor launch post and arXiv technical report, plus independent aggregators BenchmarkList and OpenRouter); scores are normalized 1-100 interpretations, not official vendor scores.
- Reference URLs:
  - [Alibaba Cloud Model Studio — qwen3.8-omni-flash model info](https://www.alibabacloud.com/help/en/model-studio/qwen3-8-omni-flash)
  - [Alibaba Cloud Model Studio — billing and model pricing](https://www.alibabacloud.com/help/en/model-studio/billing-for-model-studio)
  - [Qwen3.8-Omni: Towards Native Omni-Modal Agents (arXiv 2609.25611)](https://arxiv.org/abs/2609.25611)
  - [BenchmarkList — Qwen3.8 Omni Flash model page and independent ranks](https://benchmarklist.com/models/qwen-qwen3.8-omni-flash/)
  - [OpenRouter — qwen/qwen-3.8-omni-flash](https://openrouter.ai/qwen/qwen-3.8-omni-flash)
