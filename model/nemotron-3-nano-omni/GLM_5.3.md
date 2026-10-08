# Nemotron 3 Nano Omni — findings by GLM 5.3

- Source: NVIDIA (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (30B-A3B Reasoning)
- **Short description:** NVIDIA's open omni-modal understanding model — one 30B-total / 3B-active hybrid Mamba-Transformer-MoE model that natively takes text, image, video, and audio input for document intelligence, ASR, long audio-video understanding, and agentic computer use. Released April 28, 2026.
- **Provider / access:** NVIDIA NIM (`build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`) plus other providers (3 per Artificial Analysis); 8 providers catalogued by models.dev. Open checkpoints on Hugging Face (BF16 / FP8 / NVFP4).
- **Release / knowledge:** 2026-04-28 (HF + NVIDIA launch blog; AA lists April 29, 2026); knowledge cutoff not published.
- **IDs:** `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-*` (Hugging Face); `nemotron-3-nano-omni-30b-a3b-reasoning` (NIM). No OpenCode Zen Free ID found; NVIDIA Build offers a $0 free API endpoint per the project's curated meta and models.dev ($0.00/$0.00 listing).
- **Context window:** 262,144 tokens total (256K) with 65,536 max output — verified via models.dev and Artificial Analysis ("260k"); audio trained to 1,200s inputs with LLM context supporting 5+ hours of audio per the HF launch post.
- **Modalities:** text, image, video, audio (speech) in; text out; reasoning yes; tool calls yes (NIM function calling); GUI/computer-use trained; JSON output supported on NIM.
- **Pricing (as of 2026-10-09):** $0.30 / 1M input, $0.90 / 1M output, 67% cache discount (Artificial Analysis median across providers; blended $0.22/1M); $0 on the NVIDIA Build free endpoint (models.dev); open weights under the NVIDIA Open Model License (self-host on ~25 GB RAM).
- **Architecture:** 30B total / 3B active hybrid Mamba-Transformer MoE (23 Mamba layers + 23 MoE layers with 128 experts, top-6 routing, shared expert + 6 grouped-query attention layers); C-RADIOv4-H vision encoder; Parakeet-TDT-0.6B-v2 audio encoder (arXiv:2604.24954).

### Raw benchmarks found

Agent / tool use:

- OSWorld: **47.4%** (official HF launch table; vs Nemotron Nano V2 VL 11.0, Qwen3-Omni 30B-A3B 29.0)
- ScreenSpot-Pro (GUI): **57.8** (official HF launch table; Qwen3-Omni 59.7 slightly ahead)
- Tool-calling: **100% (29-task indicative set)** — tied with Claude Opus 4.7 (independent Abyzov benchmark, Apple M4 Max; small sample, self-declared indicative)
- GDPval-AA / Terminal-Bench / Tau3: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **10 (estimated)** (#39/142 small open-weights class; median 8) — independent evaluation still forthcoming per AA
- CharXiv reasoning: **63.6** (official HF launch table; best of the three compared models)
- Text reasoning on 29-task independent set: tied with Opus 4.7 at 100% (Abyzov; indicative only)
- GPQA / HLE / LCR / CritPt: no verified public score found for this ID
- AA-Omniscience: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: no verified public score found for this ID
- Coding Index: no verified public score found

Long context:

- MMLongBench-Doc (100+ page documents): **57.5** (official; vs V2 VL 38.0, Qwen3-Omni 49.5; 2.19x internal gain from ~11.4M synthetic QA pairs)
- MRCR / RULER: no long-context retrieval rate published for this ID

Multimodal:

- OCRBenchV2-En: **65.8** (official; best of compared models)
- Video-MME: **72.2** (official; vs 63.0 / 70.5)
- WorldSense (video+audio): **55.4** (official; vs Qwen3-Omni 54.0)
- DailyOmni: **74.1** (official; vs 73.6)
- VoiceBench: **89.4** (official; top accuracy)
- HF Open ASR WER: **5.95** (official; lower is better, beats 6.55)
- Independent Abyzov set: audio **74%**, video **75%** (29 tasks, synthesized media; only model in that test handling either natively)

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic computer use is trained-in and measured (OSWorld 47.4 — strong for a 30B open model, nearly triple its predecessor; ScreenSpot-Pro 57.8 near Qwen3-Omni parity; 100% tool-calling on a small independent set), but no Terminal-Bench/GDPval/Tau3 numbers exist and the 3B-active backbone limits complex multi-step work.
- **Reasoning: 50/100.** Above average for its small-open-weights class (AA Intelligence Index 10 vs class median 8, still an AA estimate) with best-of-class visual reasoning (CharXiv 63.6) and document reasoning (MMLongBench-Doc 57.5); capped by absence of GPQA/HLE numbers and a 3B-active text core.
- **Context window: 73/100.** Verified 262,144-token window (256K tier: 65–84 band, above the 200K=70 anchor) with genuinely long multimodal context (100+ page docs, 20-minute trained audio inputs, 5+ hour supported audio); no published retrieval-rate benchmark to score higher.
- **Multimodal: 90/100.** Full omni input (text+image+video+audio) with text output lands the 90–100 band: top VoiceBench 89.4, best-open ASR WER 5.95, Video-MME 72.2, and document-vision leadership (OCRBenchV2-En 65.8); no non-text output keeps it from the very top.
- **Coding: 42/100.** Zero verified public coding benchmark scores for this ID (SWE-bench/LiveCodeBench/SciCode all absent) and a 3B-active nano backbone not positioned for coding; the RL training covers tool calls and code-like actions, but no measured coding evidence exists.
- **Cost efficiency: 96/100.** $0 on the NVIDIA Build free endpoint, $0.30/$0.90 per 1M hosted (cheaper than the ~$0.60/$2.20 ≈ 92 anchor), 67% cache discount, open weights self-hostable on ~25 GB RAM, and 239 tok/s median output speed (AA #2/142 in class).
- **Overall Score: 63/100.** Half-up mean of (60 + 50 + 73 + 90 + 42) = 63.0 → 63. Best fit: budget omni-modal perception workhorse — document/OCR, ASR, video+audio understanding, and GUI agents at very low cost; not a frontier coding or reasoning model.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/GLM-5.3)** — 2026-10-09
- Method: public internet research (official NVIDIA HF launch post with benchmark table, Artificial Analysis, models.dev, independent Abyzov GitHub benchmark, arXiv:2604.24954); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
