# Qwen 3.5 397B — findings by Cat Jam

- Source: Alibaba / Qwen 3.5 397B (all details from Qwen HF model card tables and AA article)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B (Qwen3.5-397B-A17B)
- **Short description:** Alibaba open-weight Qwen3.5 flagship release (Feb 16 2026; 397B total / 17B active; native vision-language, agent long-context). Apache 2.0, hardware self-host; hostable only on high capacity; hosted 1M (Qwen3.5-Plus) via Alibaba.
- **Provider / access:** Hugging Face (`Qwen/Qwen3.5-397B-A17B`); Alibaba Cloud Model Studio hosted 1M version (`qwen3.5-plus`). Text/image/video input; text output.
- **Release / knowledge:** Released 2026-02-16; knowledge cutoff not stated.
- **IDs:** `qwen3.5-397b-a17b` (Alibaba)
- **Context window:** 262,144 tokens native (extensible to ~1,010,000 with YaRN); hosted Plus provides 1M. Max output recommended 32,768–81,920.
- **Modalities:** Text, image, video in; text out. Thinking mode, function calling, structured output.
- **Pricing (as of 2026-10-16):** Open weights (Apache 2.0) → self-host; hosted Qwen3.5-Plus (China $0.115/$0.688 per 1M under 128K; international $0.40/$2.40 under 256K, etc.) The base model itself is free to download.
- **Architecture:** Hybrid MoE with Gated DeltaNet (64 V / 16 QK heads) + sparse attention (10 routed + 1 shared out of 512 experts), 60 layers, 4096 hidden, 5,120? actually 4096, 248,320 vocab. Deep context compression (KV cache reduction) via ACD; supports MTP.

### Raw benchmarks found (vendor-reported, open-model comparison vs GPT-5.2/Claude/Gemini etc.)

Knowledge/reasoning long table values:

- MMLU-Pro: 87.8% (vendor)
- SuperGPQA: 70.4% (vendor)
- C-Eval 93.0 (vendor)
- GPQA Composite: 88.4%
- HLE: 28.7% (US direct no tools)
- HLE-Verified: 37.6%
- AA-LCR: 68.7%
- LongBench v2 63.2
- LiveCodeBench v6: 83.6
- AIME 2026: 91.3, HMMT Feb 2026 94.8
- AIME 2025? (AIME 2026 above)
- IFBench: 76.5
- MultiChallenge: 67.6
- BFCL-V4: 72.9
- TAU2 Bench: 86.7
- VITA-Bench: 49.7
- DeepPlanning: 34.3
- Tool Decathlon: 38.3
- MCP-Mark: 46.1
- Agent search: HLE w/ tools 48.3, BrowseComp after context management 78.6, WideSearch 74.0
- No-tool context 1M (context folding can drop or hold)
- MMMU 85.0; MMMU-Pro 79.0; MathVision 88.6; Mathvista 90.3; We-Math 87.9; DynaMath 86.3; ZEROBench 12; CharXiv RQ 80.8; OmniDoc 90.8
- VideoMMU 84.7; MLVU avg 86.7; MVBench 77.6
- Conversion: MRCR 8-needle not in vendor table except in (from baseline Chinese model card?) Qwen3.5 table didn't include MRCR; separate earlier table? (Not in sampled.)

### Independent (AA)

- Artificial Analysis Intelligence Index (max effort, v4.3.2): **45** (AA model report) — #3 open, launch-era composition: GDPval-AA, τ², TB2, SciCode, LCR, Omniscience, HLE, GPQA, CritPt, LCR.
- AA HLE? not listed in AA summary except 28.7 vendor no tools.
- AA GPQA? not in summary
- AA LCR? 68.7 (in vendor HLE table).
- AA coding / etc? not separately sampled.
- HLE-Verified 37.6 (vendor)

### Normalized scores (1–100)

- **Tool use: 84/100.** MRCR long browse? Use BFCL 72.9, TAU2 86.7, Tool Decathlon 38.3, Search Agent 48–78 (context method variance), MCP-Mark 46.1. Vendor claims OSWorld? Not in sampled table; capped.
- **Reasoning: 86/100.** GPQA 88.4, HLE 28.7 (37.6 verified), AA Intelligence 45, LCR 68.7, LiveCode? 83.6.
- **Context window: 88/100.** 262K native (1M ext via YaRN with degraded precision). LCR 68.7 at 128K (vendor comparison's AA-LCR 68.7); caps.
- **Multimodal: 88/100.** CharXiv 80.8, MMMU-Pro 79.0, OmniDoc 90.8, VideoMMMU 84.7. Strong visual but no audio output etc.
- **Coding: 84/100.** SWE-Verified 76.4, SWE-Pro 69.3, TB2 52.5, SecCode 68.3, LiveCode 83.6.
- **Cost efficiency: 90/100.** 397B MoE with 17B active is relatively cheap to self-host (needs big GPUs) and hosted Plus is mid-cost ($0.4/$2.4 China, $2/$6 international). Good value.
- **Overall Score: 86/100.** Mean (84+86+88+88+84)/5 = 86.0. High-capability (Feb 2026) open-ish flagship after embodied-agent revisions; later Qwen 3.8 family extends.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (HF model card tables and AA article); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
