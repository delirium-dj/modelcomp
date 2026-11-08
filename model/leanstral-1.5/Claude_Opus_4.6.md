# Leanstral 1.5 — findings by Claude Opus 4.6

- Source: Mistral AI (`leanstral-1.5`)
- Date: 2026-11-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Leanstral 1.5
- **Short description:** Mistral AI's specialized open-weight model for Lean 4 formal proof engineering, automated theorem proving (ATP), and autoformalization — translating mathematical claims and software specs into machine-checkable code. Released June 30, 2026, tagline "Proof Abundance for All." Not a general-purpose chatbot.
- **Provider / access:** Mistral AI platform, Hugging Face (`mistralai/Leanstral-1.5-119B-A6B`). API ID `leanstral-1-5`.
- **Release / knowledge:** 2026-06-30; knowledge cutoff not publicly stated.
- **IDs:** `mistralai/leanstral-1-5` (API), `mistralai/Leanstral-1.5-119B-A6B` (Hugging Face)
- **Context window:** 256,000 tokens (256K; recommended ≤200K for production stability).
- **Modalities:** Text, image in; text out. Specialized for Lean 4 proof code generation and verification.
- **Pricing (as of 2026-06):** ~$4 per PutnamBench solution vs. $54–$300+ for proprietary provers. Open-weight Apache 2.0. Hosted API pricing follows Mistral Small tier.
- **Architecture:** 119B total parameters, ~6–6.5B active per token. MoE with 128 total experts, 4 active per token. Multi-stage training: mid-training on math/proof corpora, SFT, RL via CISPO with Lean 4 compiler interaction. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Lean 4 compiler interaction: multi-turn RL environment training; can write, check, and refine proofs iteratively (mistral.ai)
- Code correctness verification: found 5 previously unknown bugs across 57 open-source repositories, including a critical integer overflow in a Rust zigzag decoding library (reddit.com, mlq.ai)
- Terminal-Bench: no verified public score found (specialized model)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- miniF2F: **100% (saturated)** (mistral.ai — fully solves high-school to olympiad-level formal math benchmark)
- PutnamBench: **587/672** problems solved (mistral.ai — William Lowell Putnam competition-level)
- FATE-H (Master's level algebra): **87%** (mistral.ai — open-source SoTA)
- FATE-X (Doctoral level algebra): **34%** (mistral.ai)
- FLTEval: **43.2 pass@8** (saascity.io — significant improvement over Leanstral 1.0)
- GPQA Diamond: no verified public score found (specialized model, not evaluated on general academic reasoning)
- HLE: no verified public score found
- AVL tree complexity proof: formally proves O(log n) complexities (saascity.io)

Coding:

- SWE-bench Verified: no verified public score found (specialized for formal verification, not general coding)
- LiveCodeBench: no verified public score found
- Lean 4 proof generation: state-of-the-art for open-source verification systems
- Autoformalization: translates mathematical claims into machine-checkable Lean 4 code
- SciCode / AA-SciCode: no verified public score found

Long context:

- 256K context window (200K recommended). No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 58/100.** Multi-turn Lean 4 compiler interaction with RL-trained refinement loops. Discovered 5 real bugs in OSS repos including a critical Rust overflow. Highly capable within its narrow domain but not a general-purpose tool-use model. Capped by lack of standard tool-use benchmarks and narrow specialization.
- **Reasoning: 78/100.** miniF2F saturated at 100% and PutnamBench 587/672 demonstrate exceptional formal mathematical reasoning. FATE-H 87% is open-source SoTA. However, these are specialized formal proof benchmarks — general reasoning (GPQA, HLE) untested. Score reflects elite narrow-domain reasoning with uncertainty on breadth.
- **Context window: 80/100.** 256K tokens (200K recommended). Tier-mapped to 80 for 256K window.
- **Multimodal: 35/100.** Text + image input, text output. Primarily used for proof code and mathematical formalization — multimodal capabilities are secondary to its core mission. Limited to text/image, no video/audio.
- **Coding: 65/100.** State-of-the-art Lean 4 proof generation and autoformalization. Real-world bug discovery across 57 repos. Formal verification of data structures (AVL O(log n) proof). Highly specialized — not a general coding model. No SWE-bench or LiveCodeBench scores. Capped by narrow domain focus.
- **Cost efficiency: 90/100.** ~$4/solution vs. $54–$300+ for proprietary provers. Open-weight Apache 2.0. Same efficient 6.5B active MoE architecture as Mistral Small 4. Exceptional value for formal verification.
- **Overall Score: 63/100.** Mean of (58 + 78 + 80 + 35 + 65) / 5 = 63.2, rounded half-up to 63. A groundbreaking specialist model that saturates formal math benchmarks and discovers real bugs at a fraction of proprietary prover costs — limited by narrow domain focus and minimal multimodal/general coding coverage.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-07
- Method: Public internet research across official announcements, benchmark reports, and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral AI — Leanstral 1.5 Announcement](https://mistral.ai)
  - [Hugging Face — Leanstral-1.5-119B-A6B](https://huggingface.co)
  - [MLQ.ai — Leanstral 1.5 Analysis](https://mlq.ai)
  - [SaaSCity — Leanstral 1.5 Review](https://saascity.io)
  - [Reddit — Leanstral 1.5 Discussion](https://reddit.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
