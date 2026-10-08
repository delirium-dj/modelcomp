# Nemotron 3 Nano Omni — findings by GLM 5.3 Flash

- Source: NVIDIA (`nemotron-3-nano-omni-30b-a3b-reasoning`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (Nemotron-3-Nano-Omni-30B-A3B-Reasoning)
- **Short description:** NVIDIA's open omni-modal understanding model (released 2026-04-28): a 30B-A3B hybrid Mamba-Transformer-MoE with native text, image, video and audio input — the first Nemotron multimodal with native audio. Built for document intelligence, ASR, long audio-video understanding, agentic computer use, and general multimodal reasoning.
- **Provider / access:** NVIDIA Build free API endpoint (`opencode/nemotron-3-nano-omni` on Zen); open checkpoints on Hugging Face (BF16 / FP8 / NVFP4: `nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-*`). OpenAI-compatible NIM endpoint.
- **Release / knowledge:** Released 2026-04-28 (verified via Hugging Face NVIDIA blog and buildfastwithai coverage); knowledge cutoff not published.
- **IDs:** `opencode/nemotron-3-nano-omni` (Zen, $0 free API endpoint); `nvidia/nemotron-3-nano-omni-30b-a3b-reasoning` (build.nvidia.com); HF checkpoint IDs above.
- **Context window:** 262,144 tokens total, 65,536 max output (meta-verified); audio inputs trained up to 1,200s (20 min), LLM max context supports 5+ hours of audio; 100+ page document handling verified in workflows.
- **Modalities:** Text/image/video/audio in → text out; reasoning yes (multi-environment text + omni RL, trained to abstain when evidence is insufficient); tool calls yes (agentic computer use, GUI agents); no JSON-mode note published.
- **Pricing (as of 2026-10-08):** $0 via NVIDIA Build free API endpoint; open checkpoints available for self-hosting.
- **Architecture:** Open weights; hybrid Mamba-Transformer-MoE backbone — 23 Mamba selective state-space layers, 23 MoE layers (128 experts, top-6 routing, shared expert), 6 grouped-query attention layers; C-RADIOv4-H vision encoder; Parakeet-TDT-0.6B-v2 audio encoder; lightweight 2-layer MLP projectors; dynamic resolution (1,024–13,312 patches/image), Conv3D temporal compression + EVS for video; >500 output tok/s on B200 at concurrency 1.

### Raw benchmarks found

Agent / tool use:

- OSWorld (desktop automation): **47.4%** (NVIDIA launch blog table; vs Nemotron Nano V2 VL 11.0%, Qwen3-Omni 30B-A3B 29.0%)
- ScreenSpot-Pro (GUI grounding): **57.8%** (launch blog; vs Qwen3-Omni 59.7%)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- CharXiv reasoning (chart reasoning): **63.6** (launch blog; vs Nano V2 VL 41.3, Qwen3-Omni 61.1)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM shows 29 source-displayable rows across 655 tracked slots, missing categories blank (benchlm.ai); no composite index value confirmed
- Omniscience Accuracy / Hallucination Rate: no verified public score found; RL training intentionally includes unanswerable cases to teach abstention (qualitative)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found (GUI/pyautogui action generation only, qualitative)

Long context:

- 262K context documented; MRCR/RULER/GraphWalks at window length not found. Multimodal long-context: MMLongBench-Doc **57.5** (vs Nano V2 VL 38.0, Qwen3-Omni 49.5), DailyOmni **74.1**, WorldSense **55.4**; OCRBenchV2-En **65.8**; Video-MME **72.2**; VoiceBench **89.4**; HF Open ASR **5.95** WER (lower is better)

### Normalized scores (1–100)

- **Tool use: 55/100.** OSWorld 47.4% is usable agentic-computer-use territory (2.9× over its predecessor) and ScreenSpot-Pro 57.8% grounds GUI reasoning, but no Terminal-Bench/Tau3/GDPval coverage exists, capping the dimension in the mid-50s.
- **Reasoning: 55/100.** No GPQA Diamond, HLE or composite index value is published — CharXiv reasoning 63.6 is the only verified reasoning-adjacent number; scored low-mid on limited verified evidence rather than invented values.
- **Context window: 78/100.** Documented 262,144 tokens (200K–500K tier = 65–84; 262K ≈ 78) with 100+ page document handling and 5+ hour audio; no MRCR/RULER percentage at length published.
- **Multimodal: 92/100.** Native text + image + video + audio input — the first Nemotron with native audio — maps to the 90–100 band; best-in-class claims on MMLongBench-Doc (57.5), DailyOmni (74.1) and VoiceBench (89.4) corroborate; text-only output keeps it just under the ceiling.
- **Coding: 45/100.** Zero verified public coding-benchmark numbers (SWE-bench, LiveCodeBench, SciCode all missing); only qualitative GUI/pyautogui action generation from workflows — scored on the low band rather than inventing values.
- **Cost efficiency: 100/100.** $0 via NVIDIA Build free API endpoint plus open BF16/FP8/NVFP4 checkpoints for self-hosting ($0 = 100).
- **Overall Score: 65/100.** Mean of the five quality dims (55+55+78+92+45)/5 = 65; best fit: free/cheap omni-modal document, audio-video and GUI understanding — not for frontier reasoning or verified coding workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai-org/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (NVIDIA Hugging Face launch blog, build.nvidia.com model card page, BenchLM coverage notes, meta specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
