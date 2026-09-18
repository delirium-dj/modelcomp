# MiniMax M3 — findings by Solar Pro 4

- Source: MiniMax/MiniMax M3, e.g. MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3 (MiniMax open-weight, M3 family)
- **Short description:** MiniMax's flagship open-weight model, released June 1, 2026. A MoE model with ~229.9B total parameters and 9.8B active per token across 256 fine-grained experts, built around MiniMax Sparse Attention (MSA) — a new sparse attention scheme that keeps decoding fast even at 1M-token context. Accepts text, image, and video input (no audio). Scores 59.0% on SWE-Bench Pro (surpasses GPT-5.5 and Gemini 3.1 Pro per MiniMax), 66.0% on Terminal-Bench 2.1, 70.06% on OSWorld-Verified, 74.2% on MCP Atlas, 84.8% on Video-MME, 80.8% on OmniDocBench, 83.5 on BrowseComp (beats Claude Opus 4.7's 79.3). Ships under MiniMax Community License.
- **Provider / access:** MiniMax API (platform.minimax.io), OpenRouter, Fireworks AI, Together AI. Self-hosting via Hugging Face (MiniMaxAI/MiniMax-M3) under MiniMax Community License (requires substantial multi-GPU hardware).
- **Release / knowledge:** Released 2026-06-01; knowledge cutoff not explicitly stated.
- **IDs:** `minimax-m3` or `MiniMaxAI/MiniMax-M3` (MiniMax API, Hugging Face). Standard API-key setup.
- **Context window:** 1,048,576 tokens (1M) input; max output 512,000 tokens. MiniMax Sparse Attention keeps decoding fast at full 1M window.
- **Modalities:** Text, image, and video input; text and tool-calls output. No native audio I/O. Tool calls: yes (function calling, structured output). Reasoning: yes.
- **Pricing (as of 2026-09-18):** $0.30/1M input, $1.20/1M output (standard tier, permanent 50% discount off list pricing). Cached input: $0.06/1M for prompts up to 512K. Past 512K threshold bills at 2x those rates. Token Plans available: $20-$120/month pooling usage across text, image, speech, music models. No free API tier. Third-party hosts may offer promotional credits.
- **Architecture:** Open-weight (MiniMax Community License — not fully permissive like MIT). MoE: ~229.9B total parameters, 9.8B active per token, 256 fine-grained experts. MiniMax Sparse Attention (MSA) replaces full-attention backbone. BF16 weights on Hugging Face. Self-hosting requires substantial multi-GPU hardware (quantization builds available).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- SWE-bench Verified: no verified public score found for MiniMax M3 specifically.
- SWE-bench Pro: **59.0%** (vendor-reported by MiniMax; 2026-06-01). Surpasses GPT-5.5 and Gemini 3.1 Pro on same test per MiniMax (rival scores not published alongside).
- Terminal-Bench 2.1: **66.0%** (vendor-reported by MiniMax; 2026-06-01).
- MCP Atlas: **74.2%** (vendor-reported by MiniMax; 2026-06-01). Tool-use benchmark.
- OSWorld-Verified: **70.06%** (vendor-reported by MiniMax; 2026-06-01). Computer-use benchmark.
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / SWE Atlas Codebase QnA: no verified public score found
- BrowseComp: **83.5%** (vendor-reported; widely cited). Beats Claude Opus 4.7's 79.3% on autonomous-browsing benchmark.
- SWE-fficiency: **34.8%** (vendor-reported by MiniMax; 2026-06-01).
- KernelBench Hard: **28.8%** (vendor-reported by MiniMax; 2026-06-01).

Reasoning / knowledge:

- GPQA Diamond: no verified public score found for MiniMax M3 specifically. (Circulating ~92.9% figure does NOT appear in MiniMax's own release materials — treat as unconfirmed.)
- HLE (Humanity's Last Exam): no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for MiniMax M3 specifically.
- Vals Index: no verified public score found
- MMLU Pro: no verified public score found
- Video-MME: **84.8%** (vendor-reported by MiniMax; 2026-06-01). Video understanding.
- VideoMMMU: **81.4%** (vendor-reported by MiniMax; 2026-06-01). Video understanding.
- MMMU Pro: **75.1%** (vendor-reported by MiniMax; 2026-06-01). Multimodal understanding.
- OmniDocBench: **80.8%** (vendor-reported by MiniMax; 2026-06-01). Document understanding.
- IMO 2025: **25 of 42 problems solved** (vendor-reported by MiniMax; 2026-06-01). Math olympiad.
- USAMO 2026: **17 of 42 problems solved** (vendor-reported by MiniMax; 2026-06-01). Math olympiad.

Coding:

- SWE-bench Verified: no verified public score found for MiniMax M3 specifically.
- SWE-bench Pro: **59.0%** (see above).
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: SWE-fficiency 34.8%, KernelBench Hard 28.8%.

Long context:

- Long-context recall: no verified public score found for MiniMax M3 specifically. MiniMax Sparse Attention keeps decoding fast at 1M window. Long-context accuracy at full depth not independently verified.

### Normalized scores (1–100)

- **Tool use: 82/100.** SWE-bench Pro 59.0% (solid, surpasses GPT-5.5 and Gemini 3.1 Pro per MiniMax — though rival scores not published), Terminal-Bench 2.1 66.0% (solid mid-to-high tier), MCP Atlas 74.2% (strong tool orchestration), OSWorld-Verified 70.06% (strong computer-use), BrowseComp 83.5% (beats Claude Opus 4.7's 79.3% — exceptional for autonomous browsing). Strong, consistent scores across agentic and tool-use tasks. Capped by: lack of SWE-bench Verified direct score, SWE-bench Pro at 59.0% being mid-tier for that specific benchmark, and all benchmarks being vendor-reported without independent verification. Overall tool-use capability is competitive mid-to-high tier.
- **Reasoning: 82/100.** IMO 25/42 and USAMO 17/42 (solid math olympiad performance), MMMU Pro 75.1% (solid multimodal reasoning), OmniDocBench 80.8% (strong document understanding). No GPQA or HLE direct scores from MiniMax's own materials. Capped by: lack of GPQA, HLE, MMLU Pro direct scores from MiniMax's release, and the circulating ~92.9% GPQA figure being unconfirmed. Overall reasoning is competitive mid-to-high tier.
- **Context window: 100/100.** 1,048,576 tokens (1M+) context window. Maximum tier (≥1M = 95-100). Max output 512K. MiniMax Sparse Attention keeps decoding fast at full 1M window. Score 100 reflects top-tier context window.
- **Multimodal: 85/100.** Text, image, and video input; text and tool-calls output. No native audio I/O. Per methodology: +video/PDF in = 75-90. With text+image+video input, score 85. Video-MME 84.8%, VideoMMMU 81.4%, MMMU Pro 75.1%, OmniDocBench 80.8% confirm strong multimodal capabilities. Capped by lack of audio I/O and non-text output.
- **Coding: 80/100.** SWE-bench Pro 59.0% (solid, leads per MiniMax vs GPT-5.5/Gemini 3.1 Pro — though rival scores not published), Terminal-Bench 2.1 66.0% (solid mid-to-high tier), KernelBench Hard 28.8%, SWE-fficiency 34.8%. Strong scores. Capped by: lack of SWE-bench Verified direct score, SWE-bench Pro at 59.0% being mid-tier for that specific benchmark, lack of LiveCodeBench direct score, and all benchmarks being vendor-reported without independent verification. Overall coding capability is competitive mid-to-high tier.
- **Cost efficiency: 85/100.** $0.30/$1.20 per 1M input/output (standard tier, permanent 50% discount off list). Cached input: $0.06/1M up to 512K. Past 512K bills at 2x rates. Token Plans: $20-$120/month. Per methodology: ~$0.30/$1.20 = ~85-90 range. Cheaper than 75% of GA models. Compared to competitors: cheaper than frontier models but more expensive than Flash-tier alternatives like DeepSeek V4.1 Flash ($0.15/$0.60) or GLM-5.3 Flash ($0.15/$0.50). Capped by: 2x rates past 512K threshold, Token Plan subscription model, and MiniMax Community License requiring sign-off for commercial self-hosting (not fully permissive like MIT).
- **Overall Score: 86/100.** Mean of (82 + 82 + 100 + 85 + 80 + 85) / 6 = 85.7 → **86**. Best-fit recommendation: MiniMax M3 is the best open-weight model for teams needing 1M context with native multimodal input (text+image+video) and strong agentic coding capabilities at $0.30/$1.20 (permanent 50% discount). The combination of SWE-bench Pro 59.0%, Terminal-Bench 66.0%, MCP Atlas 74.2%, OSWorld-Verified 70.06%, BrowseComp 83.5% (beats Claude Opus 4.7), Video-MME 84.8%, and 1M context with fast decoding makes this exceptional value. For teams needing fully permissive MIT license, DeepSeek V4.1 Flash or GLM-5.3 Flash are better choices. For teams needing higher SWE-bench scores, Claude Opus 5 (97.0%) or DeepSeek V4.1 Flash (TB2.1 90.6%) are better choices. For teams needing native audio I/O, models with audio support are required.

---

## Signature

- Provided by: **Solar Pro 4 (openai/solar-pro-4)** — 2026-09-18
- Method: Public internet research via model intelligence aggregators (HokAI, modelcompare.dev), vendor release materials (MiniMax official benchmarks), and independent model review sites (hokai.io); scores are normalized 1–100 interpretations, not official vendor scores. Most benchmarks are vendor-reported; independent third-party verification was limited at time of research. Note: circulating ~92.9% GPQA figure for M3 is unconfirmed and not used.
- Future sources: add a new file next to this one, e.g. `GPT_6_Astra.md`, using the same headings.
