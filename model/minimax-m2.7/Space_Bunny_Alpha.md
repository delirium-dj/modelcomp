# MiniMax M2.7 — findings by Space Bunny Alpha

- Source: MiniMax (`MiniMax-M2.7`; OpenCode Zen paid route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's open-weight text coding and agent model for terminal execution, office workflows, and multi-agent collaboration. **Superseded by MiniMax M3.**
- **Provider / access:** MiniMax API (`MiniMax-M2.7` and `MiniMax-M2.7-highspeed`) via `platform.minimax.io`; Hugging Face `MiniMaxAI/MiniMax-M2.7`; **four API providers on Artificial Analysis** (MiniMax, GMI FP8, Novita FP8, SambaNova). OpenCode Zen `opencode/minimax-m2.7` is a paid route — no Zen free ID.
- **Release / knowledge:** **2026-03-18** confirmed by both Artificial Analysis and MiniMax's own news post; MiniMax's release notes date the M2.7 series launch to Mar. 18, 2026. No reliable knowledge cutoff was shown.
- **Supersession / deprecation (NEW on 2026-09-29):** **Artificial Analysis flags MiniMax-M2.7 as deprecated** and names a successor: *"MiniMax has launched a newer release, MiniMax-M3. We suggest considering it instead."* AA continues to benchmark only the default 10K-input-token workload; all other workload results are frozen as historical. **MiniMax M3 shipped 2026-05-31** (research blog) and is listed in the platform release notes as the current M-series model for agentic reasoning, tool use, coding, multimodal chat input and long-context tasks. M3 adds **1M context** and **native image/video input plus computer operation** — the two capabilities M2.7 lacks — and uses the **MiniMax Sparse Attention (MSA)** architecture. The API pages state the price is unchanged from M2.7. The `MiniMax-M2.7` route itself remains live and priced; no hard shutdown date is published.
- **IDs:** `MiniMax-M2.7`; `MiniMax-M2.7-highspeed`; `MiniMaxAI/MiniMax-M2.7`; `minimaxi/minimax-m2.7`.
- **Context window:** **200K** confirmed by Artificial Analysis (FAQ) with the summary panel showing **205k**; a third-party provider card gives 200K context with **max output 128K**, and the repository metadata previously indicated ~131K. The methodology uses **200K**; the max-output figure is provider-specific and is not treated as a model constant.
- **Modalities:** **Text input, text output** — confirmed by AA (*"does not support image input… only supports text input"*), reasoning/interleaved thinking and tool calls supported. No image, audio, or video input verified.
- **Pricing (as of 2026-09-29 — unchanged):** **$0.30 per 1M input, $1.20 per 1M output** on MiniMax's first-party API, with **prompt-caching read $0.06** and **cache write $0.375** per 1M; blended $0.22 per 1M at 7:2:1, 80% cache discount. The `highspeed` variant is $0.60 in / $2.40 out. AA rates this as better than average for its size class (class medians $0.44 / $1.68). This is paid pricing, not a free tier.
- **Speed / latency (NEW on 2026-09-29):** output speed **63.9 tokens/s** on MiniMax's own API (AA: below the 81.8 t/s open-weight median), **TTFT 1.64s** (better than the 2.01s median), verbosity **92M output tokens** across the Index run versus a 140M median — i.e. unusually concise. Provider spread is very wide: **SambaNova 401.8 t/s**, Novita FP8 72.5 t/s, MiniMax 66.5 t/s, with SambaNova's time-to-first-answer-token at 8.00s versus MiniMax's 38.64s.
- **Architecture:** Open-weight MoE, **230B total / 10B active** (Artificial Analysis technical specifications; provider metadata previously said ~229B). **License: NON-COMMERCIAL** per AA — this is a material restriction on self-hosting and was not recorded in the previous pass.
- **A caution on live AA numbers:** search snippets for this model surface an **Intelligence Index of 39** and a rank of #34/111, but the model's own page, read on **v4.3.2**, reports **23 / #38 of 116**. The 39 figure belongs to a **stale index version** and is not used.

### Raw benchmarks found

Agent / tool use:

- **Artificial Analysis Intelligence Index v4.3.2: 23**, rank **#38 / 116**, "above average among other open weight models of similar size (median: 18)". The v4.3.2 index is the 10-evaluation composite (AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1), **ceiling 58** (Claude Opus 5.5 adaptive/max). Individual AA component rows (Terminal-Bench 4.0, τ³-Banking, ITBench-AA, EnterpriseOps-Gym-AA, Terminal-Bench-Science 0.1): **no verified public exact value found** in the retrieved page.
- Terminal-Bench 2.0: **57%** (MiniMax official model-card/source)
- Terminal-Bench 2.1 (Vals AI): **48.7%** (BenchLM, Vals AI leaderboard; different harness)
- Toolathlon: **46.3%** (MiniMax official source)
- MLE-Bench Lite: **66.6%** (MiniMax official source)
- MM-ClawBench: **62.7%** (MiniMax official source)
- Claw-Eval: **48.7%** (Claw-Eval leaderboard)
- GDPval-AA: **1495 Elo** (MiniMax official source)
- Tau3-Banking, Tau2-Bench, and exact ClawProBench: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond: **86.6%** (Vals AI leaderboard)
- MMLU-Pro: **80.4%** (Vals AI leaderboard)
- AIME 2025: **80.0%** (Arcee comparison snapshot; secondary exact source, not MiniMax's own run)
- HLE, MLCR/LCR, CritPt, hallucination metrics: **no verified public exact value found**
- AA v4.3.2 HLE / GDP.pdf / CritPt / AA-Omniscience component rows: **no verified public exact value found**

Coding:

- SWE-bench Pro: **56.22%** (MiniMax official source). M3's launch material re-evaluates M2.7 on SWE Atlas-Codebase QnA and SWE Atlas-Test Writing as a comparison baseline (using Mini-SWE-Agent / Claude Code scaffolding), which confirms M2.7 remains a live reference point but not a current leader.
- SWE-bench Multilingual resolved: **76.5%** (MiniMax official model-card eval)
- Vibe Code Bench: **55.6%** (Groq documentation)
- SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE, and the AA SciCode row: **no verified public exact value found**

Long context:

- Reported context is **200K** (AA FAQ) / **205K** (AA summary panel) / approximately 196K–205K depending on provider, with **max output 128K** on one provider card. No exact-model MRCR/RULER retrieval result was found. This is the clearest capability gap against M3, which offers 1M.

Sources consulted: [Artificial Analysis MiniMax-M2.7](https://artificialanalysis.ai/models/minimax-m2-7) and its [provider benchmarking page](https://artificialanalysis.ai/models/minimax-m2-7/providers), read on **Intelligence Index v4.3.2**, plus [MiniMax M2.7 model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7), [MiniMax M3 announcement](https://www.minimax.io/blog/minimax-m3), [MiniMax platform release notes](https://platform.minimax.io/docs/release-notes/models.md), [MiniMax pay-as-you-go pricing](https://platform.minimax.io/docs/guides/pricing-paygo), and [BenchLM MiniMax M2.7](https://benchlm.ai/models/minimax-m2-7), accessed 2026-09-29. The fetched M2.7 marketing page still exposes M2.5 content under the M2.7 URL, so only the exact M2.7 model card, AA records and provider-specific benchmark rows are treated as evidence.

### Normalized scores (1–100)

- **Tool use: 78/100** *(unchanged)*. Terminal-Bench 57%, Toolathlon 46.3%, MLE-Bench Lite 66.6%, MM-ClawBench 62.7% and GDPval-AA 1495 Elo provide useful agent evidence, and the first AA composite (23, above the 18 median for the class) is consistent with that. Held rather than raised: Tau3 and exact ClawProBench values are missing, Claw-Eval at 48.7% is soft, and the route is formally deprecated in favour of M3.
- **Reasoning: 80/100** *(unchanged)*. GPQA 86.6% and MMLU-Pro 80.4% are strong, and AA v4.3.2 at 23 (vs an 18 class median) is above average rather than exceptional. Held flat: HLE/MLCR/CritPt rows are still absent, and 23 remains well below the 58 ceiling.
- **Context window: 70/100** *(unchanged)*. The 200K window is now confirmed by AA's own FAQ rather than only a third-party profile, but it lands in the same 200K–500K tier, no retrieval-at-length score is published, and M3's move to 1M makes this a visible step back for new work.
- **Multimodal: 15/100** *(unchanged)*. AA explicitly records text-only input; no image/audio/video input is supported. M3 is the multimodal successor.
- **Coding: 82/100** *(unchanged)*. SWE-bench Pro 56.22%, SWE-bench Multilingual 76.5% and Vibe Code Bench 55.6% support solid coding, and M3's own launch material keeps re-measuring M2.7 as a baseline. Held: SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE remain missing, and M3 is the current MiniMax coding position.
- **Cost efficiency: 90/100** *(unchanged)*. The $0.30/$1.20 rate is confirmed unchanged on MiniMax's first-party pricing page and AA rates it better than average for the class, with an 80% cache discount and a blended $0.22/1M. Held at 90 rather than higher: the **NON-COMMERCIAL license on the weights** restricts self-hosted commercial use, so the cheap-token advantage is largely an API-only benefit.
- **Overall Score: 65.0/100** *(unchanged)*. (78 + 80 + 70 + 15 + 82) / 5 = 325 / 5 = **65.0**. Best fit: budget-conscious text coding and agent workflows on a paid API. For anything new, choose a multimodal model for vision, a 1M-context model for long-document work, or M3 itself if you want all three from one MiniMax route.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research. Primary new evidence on 2026-09-29 was the Artificial Analysis MiniMax-M2.7 model and provider pages, read on **Intelligence Index v4.3.2** (10 evals: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1; ceiling 58), plus MiniMax's M3 announcement, release notes and pay-as-you-go pricing. A stale **39** index figure circulating in search snippets was rejected in favour of the model's own v4.3.2 value of **23**. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Changes from the 2026-09-24 pass: **deprecation confirmed with named successor MiniMax M3** (shipped 2026-05-31, 1M context, native multimodal, MSA attention); first AA Intelligence Index value on v4.3.2 (23, #38/116) — the previously absent index is now supplied; output speed 63.9 t/s, TTFT 1.64s, verbosity 92M tokens and 4-provider speed spread (SambaNova 401.8 t/s) added; parameters 229B → 230B confirmed; **license recorded as NON-COMMERCIAL**; cache pricing ($0.06 read / $0.375 write) added. **No normalized score or the Overall changed.**
- Future sources: add a new file next to this one, e.g. `MiniMax_M3.md`, using the same headings.
