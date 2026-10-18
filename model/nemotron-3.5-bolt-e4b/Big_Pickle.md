# Nemotron 3.5 Bolt E4B — findings by Big Pickle

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt E4B
- **Short description:** NVIDIA's announced ~4B edge model in the Nemotron 3.5 Bolt family, optimized for "intelligence per GB" in a 4 GB memory footprint. Targeted at physical and conversational agents on GeForce RTX, Jetson, and RTX/DGX Spark hardware — fast local voice assistants, interactive characters, and embedded interfaces. Combines natural conversation with multi-turn agentic capabilities (tool use while responding to an application's current state). Announced 2026-10-15 alongside Nemotron 3.5 Super VL and Bolt 74B-A9B 24GB; **scheduled for release 2026-10-23** (still unreleased as of this report). Not an alias of any other entry.
- **Provider / access:** NVIDIA. Weights expected on Hugging Face under the Nemotron family; customization via NVIDIA NeMo, Python-based pipelines, and open datasets. **Not yet available** as of 2026-10-18 — release date 2026-10-23 (NVIDIA blog, VentureBeat, multiple confirmations).
- **Release / knowledge:** announced 2026-10-15 (NVIDIA blog, VentureBeat, Yahoo Finance, The Decoder); release scheduled 2026-10-23. Knowledge cutoff not published. **Unreleased** — specs and benchmarks are announcement-stage only.
- **IDs:** not yet published on Hugging Face. Expected to follow the `nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B` naming pattern of its siblings.
- **Context window:** **unverified** — not published in the announcement. The sibling Bolt 74B-A9B has a 256K context window; the E4B's window is likely smaller given the 4 GB memory footprint but has not been confirmed.
- **Modalities:** **unverified** — not published in the announcement. The sibling Bolt 74B-A9B is a hybrid vision-language model (C-RADIO vision encoder); the E4B may be text-only or multimodal but no confirmation exists.
- **Pricing:** **no pricing published.** Open weights expected (self-host free) per the Nemotron family pattern (OpenMDW-1.1 license). `meta.json` notes `noFreeId: true` — no free hosted tier known.
- **Architecture:** **unverified** — not published. The Nemotron 3.5 family uses hybrid Mamba-2/Transformer MoE architectures (Bolt 74B-A9B: 74B total / 9B active, Mamba-2/Transformer hybrid MoE). The E4B is expected to be a smaller sibling but total/active parameter counts, layer count, and attention type have not been published. The "E4B" name suggests ~4 GB memory footprint (matching the NVIDIA blog's "Bolt E4B 4GB"), not necessarily 4B parameters — though 4B total is plausible given the 4 GB target.

### Raw benchmarks found

> **No benchmark scores have been published for Nemotron 3.5 Bolt E4B.** The model is unreleased (scheduled 2026-10-23); BenchLM has a tracking page with 0 of 639 benchmarks covered and "coverage coming soon." No vendor, independent, or third-party scores exist. All figures below are from the sibling Bolt 74B-A9B for context only — they are **not** E4B scores.

Coding:

- SWE-bench Verified: **no verified public score found** (unreleased)
- Terminal-Bench 2.1: **no verified public score found** (unreleased)
- LiveCodeBench: **no verified public score found** (unreleased)
- SWE-bench Multilingual: **no verified public score found** (unreleased)

Agent / tool use:

- BrowseComp: **no verified public score found** (unreleased)
- PinchBench: **no verified public score found** (unreleased)
- WebArena: **no verified public score found** (unreleased)
- MCP-Atlas: **no verified public score found** (unreleased)
- τ³-Bench: **no verified public score found** (unreleased)
- OSWorld: **no verified public score found** (unreleased)
- GDPval-AA: **no verified public score found** (unreleased)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (unreleased)
- HLE: **no verified public score found** (unreleased)
- AIME: **no verified public score found** (unreleased)
- Artificial Analysis Intelligence Index: **no verified public score found** (unreleased)
- BenchLM overall: **not computed** (unranked; 0 of 639 benchmarks covered, "coming soon")

Multimodal:

- **No verified public score found** (unreleased; modality support unverified)

Long context:

- **No verified public score found** (unreleased; context window unverified)

### Scores

All six scores are minimal placeholders pending release. The model is announcement-stage only — no specifications, benchmarks, or pricing have been published.

- **Tool use: 10/100.** Announcement states multi-turn agentic capabilities and tool use for conversational/physical agents, but no benchmark scores exist. Score reflects announcement-only evidence.
- **Reasoning: 10/100.** No reasoning benchmarks published. The Nemotron 3.5 family (Lightning, Super VL) has solid reasoning credentials, but the E4B's reasoning ability at a 4 GB footprint is completely unverified.
- **Context window: 5/100.** Context window not published. The 4 GB memory footprint severely constrains the maximum achievable window; the sibling 74B-A9B at 24 GB has 256K, so the E4B's window is likely in the low tens of thousands at most.
- **Multimodal: 5/100.** Modality support unverified. The sibling Bolt 74B-A9B is vision-language; the E4B may be text-only given the footprint, but no confirmation exists.
- **Coding: 5/100.** No coding benchmarks published. The model targets conversational agents and voice assistants, not coding workloads — the sibling Bolt 74B-A9B is the coding-oriented edge model.
- **Cost efficiency: 85/100.** Open weights expected (OpenMDW-1.1 family license); 4 GB footprint means it runs on extremely cheap hardware (Jetson, entry-level GeForce RTX). No hosted pricing published. Score reflects the anticipated free self-host model, discounted slightly for uncertainty.
- **Overall Score: 7/100.** Half-up mean of Tool use (10), Reasoning (10), Context window (5), Multimodal (5), Coding (5) = 35/5 = 7. Cost efficiency (85) is excluded per `model-comparison.md` methodology. This score reflects announcement-stage evidence only and should be updated after the 2026-10-23 release with actual specs and benchmarks.

### Caveats and conflicts

- **Unreleased model:** Nemotron 3.5 Bolt E4B is scheduled for release on 2026-10-23 (NVIDIA blog, VentureBeat, Yahoo Finance, The Decoder, kie.ai — five independent confirmations). As of this report's date (2026-10-18), the model has not shipped. All scores are placeholders.
- **No specs published:** total/active parameters, context window, modality support, max output, and architecture details have not been published. Only the 4 GB memory footprint and target use cases (voice assistants, interactive characters, embedded interfaces) are known from the announcement.
- **"E4B" naming ambiguity:** the name suggests either ~4B parameters or a 4 GB memory footprint. NVIDIA's blog explicitly says "Bolt E4B 4GB," confirming the 4 GB interpretation. The parameter count may be different (e.g., a compressed MoE similar to how Bolt 74B-A9B is compressed from Super VL 120B).
- **BenchLM tracking with zero coverage:** BenchLM has created a tracking page (https://benchlm.ai/models/nemotron-3-5-bolt-e4b) with 0 of 639 benchmarks covered and "coverage coming soon." This confirms the model is on their radar but has no data yet.
- **Sibling context for comparison:** the Bolt 74B-A9B (74B/9B active, 256K context, 24 GB) scores TB2.1 51.0%, BrowseComp 66.8%, PinchBench 87.8%, GPQA-D 86.4%, HLE 25.3%, τ³ 17.0%. The E4B at 4 GB will be dramatically weaker on all of these, but no E4B-specific scores exist.
- **Family license:** the Nemotron 3.5 family uses OpenMDW-1.1 (confirmed for Lightning; expected for Bolt E4B). This permits commercial use and modification.

### Sources

- NVIDIA Nemotron 3.5 Super VL and Bolt announcement (2026-10-15): https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/
- VentureBeat coverage (2026-10-15): https://venturebeat.com/technology/nvidias-new-open-nemotron-3-5-super-vl-with-post-training-beats-claude-opus-5-gpt-6-1-sol-on-specialized-task-benchmarks
- Yahoo Finance coverage (2026-10-16): https://finance.yahoo.com/news/nvidia-adds-super-vl-bolt-103909969.html
- The Decoder coverage (2026-10-15): https://the-decoder.com/nvidias-nemotron-3-5-super-vl-is-an-open-model-built-to-run-enterprise-ai-agents-nonstop/
- kie.ai Bolt family explainer: https://kie.ai/blog/what-is-nemotron-3-5-bolt
- Interesting Engineering coverage: https://interestingengineering.com/ai-robotics/nvidia-nemotron-35-super-vl-5x-faster
- BenchLM tracking page (0 coverage): https://benchlm.ai/models/nemotron-3-5-bolt-e4b
- Bolt 74B-A9B sibling (for comparison context): https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/

**Big Pickle (opencode/big-pickle)** — 2026-10-18
